import { expect } from '@esm-bundle/chai';
import {
    checkHeuristicPatterns,
    hasHeuristicPatterns,
    cleanButtonText,
    classifyButtonTextRegex,
    classifyButtons,
    classifyPopup,
    excludedBy,
    negativeContext,
    DETECT_PATTERNS,
} from '../../lib/heuristic-classify';
import { detectLiteralTable, requiredLiterals } from '../../scripts/required-literals';
import { DETECT_LITERAL_INDEX, DETECT_PATTERN_LITERALS } from '../../lib/heuristic-literals';
import { getActionablePopups, isDisabled, excludeContainers, getButtonData, isDialogLikeElement } from '../../lib/heuristics';
import { ButtonData } from '../../lib/types';

function rejectButtons(buttons: ButtonData[]) {
    return buttons.filter((b) => b.regexClassification === 'reject');
}

function nonRejectButtons(buttons: ButtonData[]) {
    return buttons.filter((b) => b.regexClassification !== 'reject');
}

describe('checkHeuristicPatterns', () => {
    it('detects cookie-related text', () => {
        const { patterns, snippets } = checkHeuristicPatterns('We use cookies here', undefined, { patterns: [/we use cookies/gi] });

        expect(patterns.length).to.be.greaterThan(0);
        expect(snippets.length).to.be.greaterThan(0);
    });

    it('returns empty arrays for unrelated text', () => {
        const { patterns, snippets } = checkHeuristicPatterns('Welcome to our website', undefined, { patterns: [/we use cookies/gi] });

        expect(patterns).to.have.length(0);
        expect(snippets).to.have.length(0);
    });

    it('returns empty arrays for empty text', () => {
        const { patterns, snippets } = checkHeuristicPatterns('', undefined, { patterns: [/we use cookies/gi] });

        expect(patterns).to.have.length(0);
        expect(snippets).to.have.length(0);
    });

    it('does not match after the text limit', () => {
        const { patterns, snippets } = checkHeuristicPatterns('X'.repeat(100000) + 'We use cookies here', undefined, {
            patterns: [/we use cookies/gi],
        });

        expect(patterns).to.have.length(0);
        expect(snippets).to.have.length(0);
    });

    it('handles non-global regex with optional capture groups without throwing', () => {
        // Regex from heuristic-patterns.ts (Polish) that has optional capture groups and
        // no `g` flag. `String.prototype.match` returns `undefined` entries for optional
        // groups that did not match, which used to crash the caller with a TypeError.
        const pattern = /(używamy|stosujemy)( są)?.{0,20} plik(i|ów|ach) cookie/i;
        const { patterns, snippets } = checkHeuristicPatterns('Używamy plików cookie i innych technologii', undefined, {
            patterns: [pattern],
        });

        expect(patterns.length).to.be.greaterThan(0);
        expect(snippets.length).to.be.greaterThan(0);
        expect(snippets.every((s) => typeof s === 'string')).to.be.true;
    });

    it('detects essential cookie notices', () => {
        const { patterns } = checkHeuristicPatterns('We use essential cookies for site functionality and optional cookies for analytics.');

        expect(patterns.length).to.be.greaterThan(0);
    });

    it('detects website cookie experience notices', () => {
        const { patterns, snippets } = checkHeuristicPatterns(
            'The Algonquin College website uses cookies to enhance your browsing experience.',
        );

        expect(patterns.length).to.be.greaterThan(0);
        expect(snippets).to.include('website uses cookies to enhance your browsing experience');
    });
});

describe('checkHeuristicPatterns with a qualifier before "cookies"', () => {
    it('detects "we use <qualifier> cookies" notices', () => {
        const texts = [
            // openrouter.ai
            'Cookie Preferences We use essential cookies for site functionality and optional cookies for analytics.',
            'We use optional cookies to measure traffic',
            'We use analytics cookies and similar technologies',
            'We serve necessary cookies only',
        ];
        for (const text of texts) {
            expect(checkHeuristicPatterns(text).patterns.length, text).to.be.greaterThan(0);
        }
    });

    it('does not match when "cookies" is further away', () => {
        expect(
            checkHeuristicPatterns('We use the best chocolate in our cookies', undefined, { patterns: [/we use(?: \w+)? cookies/gi] })
                .patterns,
        ).to.have.length(0);
    });
});

describe('checkHeuristicPatterns with Russian popups', () => {
    it('detects Russian cookie notices', () => {
        const texts = [
            'Мы используем файлы cookie для улучшения работы сайта. Правила сайта используют технологии cookie.',
            'Этот сайт использует cookie, чтобы вам было удобнее',
            'Продолжая работу с сайтом, вы соглашаетесь с использованием файлов cookie',
            'Мы используем куки, чтобы сайт работал лучше',
            'Этот сайт использует куки-файлы',
            'Сайт использует технологии куки. Продолжая, вы принимаете обработку файлов куки',
            'Мы применяем файлы cookie, чтобы предложить вам лучший сервис',
            'Сайт собирает cookie для аналитики',
            'Сохраняем куки на вашем устройстве',
            'На сайте установлены cookie-файлы',
            'Оставаясь на сайте, вы соглашаетесь с политикой в отношении файлов cookie',
        ];
        for (const text of texts) {
            expect(checkHeuristicPatterns(text).patterns.length, text).to.be.greaterThan(0);
        }
    });

    it('does not detect unrelated Russian text', () => {
        expect(checkHeuristicPatterns('Дешевые авиабилеты онлайн и бронирование отелей').patterns).to.have.length(0);
    });
});

describe('checkHeuristicPatterns with Italian popups', () => {
    it('detects Italian cookie notices', () => {
        const texts = [
            'Qualcuno ha detto… cookie? Noi e i nostri partner utilizziamo i cookie per fornirti un servizio migliore',
            'Utilizziamo cookie tecnici e di profilazione',
            'Questo sito utilizza i cookie per migliorare la tua esperienza',
            'Noi e i nostri 150 partner archiviamo informazioni come i cookie',
            'Archiviare e/o accedere a informazioni su un dispositivo',
        ];
        for (const text of texts) {
            expect(checkHeuristicPatterns(text).patterns.length, text).to.be.greaterThan(0);
        }
    });

    it('does not detect unrelated Italian text', () => {
        expect(
            checkHeuristicPatterns(
                'Noi e i nostri partner commerciali utilizziamo materiali riciclati. Il sito usa la tecnologia più moderna.',
            ).patterns,
        ).to.have.length(0);
    });
});

describe('checkHeuristicPatterns with Swedish popups', () => {
    it('detects Swedish cookie notices', () => {
        const texts = [
            // svtplay.se
            'Viss datahantering är nödvändig för att säkerställa att vår tjänst fungerar, vilket innebär att vi använder spårningstekniker såsom cookies.',
            'Vi använder cookies för att förbättra din upplevelse',
            'Webbplatsen använder kakor',
        ];
        for (const text of texts) {
            expect(checkHeuristicPatterns(text).patterns.length, text).to.be.greaterThan(0);
        }
    });

    it('does not detect unrelated Swedish text', () => {
        expect(checkHeuristicPatterns('Vi använder svenska råvaror i våra bullar').patterns).to.have.length(0);
    });
});

describe('checkHeuristicPatterns with Japanese popups', () => {
    it('detects Japanese cookie notices', () => {
        const texts = [
            '当サイトはサービス改善のためCookieを使用しています。',
            '当ウェブサイトではクッキーを利用しています',
            'このサイトはクッキー（Cookie）を使用しています',
        ];
        for (const text of texts) {
            expect(checkHeuristicPatterns(text).patterns.length, text).to.be.greaterThan(0);
        }
    });

    it('does not detect unrelated Japanese text', () => {
        expect(checkHeuristicPatterns('全国の旧車イベント情報を集約しています').patterns).to.have.length(0);
    });
});

describe('checkHeuristicPatterns with inputs and context negatives', () => {
    it('runs patterns scoped to an input on that input only', () => {
        const patterns = [{ pattern: /accept all/gi, input: 'popup' as const }];
        expect(checkHeuristicPatterns('Accept all', 'popup', { patterns }).patterns).to.have.length(1);
        expect(checkHeuristicPatterns('Accept all', 'page', { patterns }).patterns).to.have.length(0);
        expect(checkHeuristicPatterns('Accept all', undefined, { patterns }).patterns).to.have.length(0);
    });

    it('drops a match whose context hits a negative, and keeps the text if another match survives', () => {
        const negatives = [{ name: 'footer', pattern: /^[^.\n]{0,60}\n[^.\n]{0,60}$/, lines: [0, 1] as [number, number] }];
        const footer = 'Contact\nUse of cookies\nImprint';
        const dropped = checkHeuristicPatterns(footer, 'page', { patterns: [/use of cookies/gi], negatives });
        expect(dropped.patterns).to.have.length(0);
        expect(dropped.suppressed).to.deep.equal([{ pattern: '/use of cookies/gi', negative: 'footer' }]);
        const both = `We ask for your consent to the use of cookies on this site. Accept or reject.\n\n${footer}`;
        expect(checkHeuristicPatterns(both, 'page', { patterns: [/use of cookies/gi], negatives }).patterns).to.have.length(1);
    });

    it('keeps a match when the negative unless wording is present', () => {
        const negatives = [{ name: 'terms', pattern: /\bterms\b/i, unless: /cookie/i, window: 80 }];
        expect(
            checkHeuristicPatterns('By continuing you accept our terms.', undefined, { patterns: [/by continuing/gi], negatives }).patterns,
        ).to.have.length(0);
        expect(
            checkHeuristicPatterns('By continuing you accept our terms and cookies.', undefined, {
                patterns: [/by continuing/gi],
                negatives,
            }).patterns,
        ).to.have.length(1);
    });

    it('does not count "accept all" in prose', () => {
        expect(checkHeuristicPatterns('We accept all major credit cards.', 'page').patterns).to.not.include('/accept all/gi');
        expect(checkHeuristicPatterns('Cookies help us.\nAccept all\nReject all', 'popup').patterns).to.include('/accept all/gi');
    });

    it('drops page matches next to an age gate with a leave button, not next to a consent control', () => {
        const gate = 'Adults only. You must be over 18 to enter.\nThis site uses cookies.\n\nOK\nLeave';
        expect(checkHeuristicPatterns(gate, 'page').patterns).to.have.length(0);
        const banner = 'Adults only. You must be over 18 to enter.\nThis site uses cookies.\n\nAccept all\nReject all';
        expect(checkHeuristicPatterns(banner, 'page').patterns.length).to.be.greaterThan(0);
    });

    it('detects Italian, Dutch and German cookie notices', () => {
        expect(checkHeuristicPatterns('Questo sito utilizza cookie tecnici. Accetta tutti', 'popup').patterns.length).to.be.greaterThan(0);
        expect(
            checkHeuristicPatterns('Wij en onze partners slaan informatie op en/of lezen deze.', 'popup').patterns.length,
        ).to.be.greaterThan(0);
        expect(checkHeuristicPatterns('Auf dieser Seite werden Cookies verwendet.', 'popup').patterns.length).to.be.greaterThan(0);
    });

    it('hasHeuristicPatterns agrees with checkHeuristicPatterns on inputs and negatives', () => {
        const texts = ['We accept all major credit cards.', 'Cookies help us.\nAccept all\nReject all', 'Contact\nUse of cookies\nImprint'];
        for (const text of texts) {
            for (const input of ['popup', 'page'] as const) {
                const expected = checkHeuristicPatterns(text, input).patterns.length > 0;
                expect(hasHeuristicPatterns(text, input), `${input}: ${text}`).to.equal(expected);
            }
        }
    });

    it('rejects a pattern list as the input argument', () => {
        const legacy = checkHeuristicPatterns as unknown as (text: string, patterns: RegExp[]) => unknown;
        expect(() => legacy('We use cookies', [/we use cookies/gi])).to.throw(TypeError, /patterns/);
        expect(() => (hasHeuristicPatterns as unknown as (t: string, i: string) => boolean)('We use cookies', 'frame')).to.throw(TypeError);
    });

    it('takes the line or neighbouring lines as the context', () => {
        const text = 'one\ntwo\nthree four\nfive\nsix';
        const at = text.indexOf('four');
        expect(negativeContext(text, at, at + 4, { name: 'n', lines: 0 })).to.equal('three four');
        expect(negativeContext(text, at, at + 4, { name: 'n', lines: [1, 0] })).to.equal('two\nthree four');
        expect(negativeContext(text, at, at + 4, { name: 'n', window: 3 })).to.equal('ee four\nfi');
    });
});

describe('requiredLiterals', () => {
    it('matches the generated table for the built-in patterns (run npm run build-heuristic-literals if not)', () => {
        const { literals, index } = detectLiteralTable();
        expect(DETECT_PATTERN_LITERALS).to.deep.equal(literals);
        expect(DETECT_LITERAL_INDEX).to.deep.equal(index);
    });

    it('finds literals every match contains', () => {
        expect(requiredLiterals(/accept all/gi)).to.deep.equal(['accept all']);
        expect(requiredLiterals(/\b(?:our|unseren) \d{2,4} (?:partners|partnern)\b/gi)).to.deep.equal(['partners', 'partnern']);
        expect(requiredLiterals(/\bcookies? zum einsatz\b|\beinsatz von cookies\b/gi)).to.deep.equal([
            ' zum einsatz',
            'einsatz von cookies',
        ]);
    });

    it('finds none when a part is optional or unknown', () => {
        expect(requiredLiterals(/(?:cookie)?/gi)).to.deep.equal([]);
        expect(requiredLiterals(/by continuing|\bab\b/gi)).to.deep.equal([]);
    });

    it('does not read the characters of a multi-character escape as literals', () => {
        // built from strings: the bundler would turn some escapes in regex literals into the characters themselves
        const literals = (source: string, flags = 'i') => requiredLiterals(new RegExp(source, flags));
        // each literal must appear in text the pattern matches, such as "café cookies" or "Abcde"
        expect(literals('caf\\u00e9 cookies')).to.deep.equal([' cookies']);
        expect(literals('\\u{e9}tat des cookies', 'iu')).to.deep.equal(['tat des cookies']);
        expect(literals('\\x41bcde')).to.deep.equal(['bcde']);
        expect(literals('\\p{L}+ cookie banner', 'iu')).to.deep.equal([' cookie banner']);
        expect(literals('(?<w>allow)\\k<w> cookies')).to.deep.equal([' cookies']);
        expect(literals('\\cJcookie notice', '')).to.deep.equal(['cookie notice']);
    });

    it('does not change results: the same patterns match as without the prefilter', () => {
        const plain = DETECT_PATTERNS.filter((p): p is RegExp => p instanceof RegExp);
        const texts = ['ACCEPT ALL COOKIES', 'We use analytics Cookies', 'nothing here', 'Tout refuser', 'Utilizziamo i cookie', ''];
        for (const t of texts) {
            const expected = plain.filter((p) => t.match(p)).map(String);
            expect(checkHeuristicPatterns(t, undefined, { patterns: plain, negatives: [] }).patterns).to.deep.equal(expected);
        }
    });

    it('never skips a custom pattern, which has no generated literals', () => {
        expect(DETECT_PATTERN_LITERALS['/zorblax consent/gi']).to.equal(undefined);
        expect(
            checkHeuristicPatterns('Zorblax consent', undefined, { patterns: [/zorblax consent/gi], negatives: [] }).patterns,
        ).to.deep.equal(['/zorblax consent/gi']);
    });
});

describe('checkHeuristicPatterns with Danish popups', () => {
    it('detects Danish cookie notices', () => {
        const texts = [
            'Sundhed.dk og tredjepartstjenester bruger cookies til at forbedre brugeroplevelsen.',
            'Vi bruger cookies for at give dig den bedste oplevelse.',
        ];
        for (const text of texts) {
            expect(checkHeuristicPatterns(text).patterns.length, text).to.be.greaterThan(0);
        }
    });

    it('does not detect unrelated Danish text', () => {
        expect(checkHeuristicPatterns('Find information om sundhed og sygdom').patterns).to.have.length(0);
    });
});

// excluded as a popup by a whole-text context negative
const isExcludedPopup = (text: string) => excludedBy(text, 'popup').length > 0;

describe('popup exclusions', () => {
    it('flags doublelist-style age verification popups', () => {
        // Real-world text from the doublelist.com age gate (listings page)
        const text =
            'Age verification & content rules This section may contain adult oriented material of a graphic and sexual nature, ' +
            'and could be viewed objectionable to some persons. This material is INTENDED ONLY FOR PERSONS OVER 18 YEARS OF AGE. ' +
            'This site uses cookies for logins, ads and other normal site function. I accept I reject';
        expect(isExcludedPopup(text)).to.be.true;
    });

    it('flags popups headed "Age verification"', () => {
        expect(isExcludedPopup('Age verification\nYou must confirm your age to continue.')).to.be.true;
    });

    it('flags an age gate whose only button is a bare accept, but not one with a cookie reject', () => {
        const gate = 'Age verification\nYou must be over 18 years old to enter. This site uses cookies.';
        expect(isExcludedPopup(`${gate}\nAccept all`)).to.be.true;
        expect(isExcludedPopup(`${gate}\nAccepter`)).to.be.true;
        expect(isExcludedPopup(`${gate}\nAccept all\nReject all`)).to.be.false;
    });

    it('flags "must be 18 or older" disclaimers', () => {
        expect(isExcludedPopup('You must be 18 years or older to enter this site.')).to.be.true;
    });

    it('flags "I am 18+" age gates', () => {
        expect(isExcludedPopup('Confirm your age to continue. I am 18+ I am under 18')).to.be.true;
    });

    it('flags adult-content disclaimers', () => {
        expect(isExcludedPopup('This website contains adult oriented material. Please confirm to enter.')).to.be.true;
        expect(isExcludedPopup('Adult-only website. You must be 21 or older to enter.')).to.be.true;
        expect(isExcludedPopup('Adult website ahead.')).to.be.true;
    });

    it('does not flag a normal cookie consent popup', () => {
        expect(isExcludedPopup('We use cookies to enhance your experience. Accept All Reject All')).to.be.false;
    });

    it('does not flag empty strings', () => {
        expect(isExcludedPopup('')).to.be.false;
    });

    it('flags age gates in other languages', () => {
        expect(isExcludedPopup('Diese Website ist nur für Erwachsene. Du musst mindestens 18 Jahre alt sein.')).to.be.true;
        expect(isExcludedPopup('Sitio solo para mayores de edad. Debes tener más de 18 años.')).to.be.true;
    });

    it('does not flag a cookie banner that states an age in passing', () => {
        expect(isExcludedPopup('By using this site you confirm you are over 18. We use cookies. Accept cookies Reject cookies')).to.be
            .false;
    });

    it('does not flag a passive age statement whose notice has its own cookie or close control', () => {
        expect(isExcludedPopup('We use cookies.\nBy using this site you confirm you are over 18.\nCustomise\nAccept')).to.be.false;
        expect(isExcludedPopup('Nur für Erwachsene über 18 Jahre.\nWir verwenden Cookies.\nCookies verwalten\nAkzeptieren')).to.be.false;
        expect(isExcludedPopup('You must be of legal age to enter.\nThis site uses cookies.\nClose this popup')).to.be.false;
    });

    it('flags an age gate with its own leave button even when it offers cookie settings', () => {
        expect(isExcludedPopup('Solo para mayores de edad.\nEntrar\nNo, abandonar sitio\nConfigurar cookies')).to.be.true;
        expect(isExcludedPopup('Alleen voor 18 jaar of ouder.\nIk ben 18+\nIk ben onder 18\nMeer opties')).to.be.true;
    });

    it('flags an age gate whose OK sits next to a leave button', () => {
        expect(isExcludedPopup('You must be over 18. We use cookies. Accept all\nOK\nLeave')).to.be.true;
    });

    it('flags a license agreement that mentions cookies', () => {
        const agreement =
            'Our End-User License Agreement has changed. Please read and accept it to keep using the software.\n' +
            'Privacy. Our websites may use cookies; you can reject the use of cookies in your browser settings.\n' +
            'Limitation of Liability. To the extent permitted by law, the vendor is not liable for indirect damages.\n' +
            'Governing Law. This agreement is governed by the laws of the vendor’s country.\n' +
            'Accept\nDecline';
        expect(isExcludedPopup(agreement)).to.be.true;
    });

    it('does not flag a consent dialog that uses legal wording in passing', () => {
        expect(
            isExcludedPopup(
                'We and our partners use cookies and other technologies (together hereinafter: "Cookies") to store and/or access device information.\nAccept all\nReject all',
            ),
        ).to.be.false;
    });

    it('flags "must be 18" and "21+ years" age gates', () => {
        expect(isExcludedPopup('You must be 18 to enter this site. This site uses cookies.\nYes\nNo')).to.be.true;
        expect(isExcludedPopup('Visitors must be at least 21 to continue. We use cookies.\nEnter')).to.be.true;
        expect(isExcludedPopup('This site is 21+ years of age only. We use cookies.\nYes\nNo')).to.be.true;
        expect(isExcludedPopup('Content for 18+ years old visitors. This site uses cookies.\nEnter')).to.be.true;
    });

    it('flags French and Italian age gates worded with accented letters', () => {
        expect(isExcludedPopup("Vous devez avoir l'âge légal pour entrer. Ce site utilise des cookies.\nOui\nNon")).to.be.true;
        expect(isExcludedPopup("Prima di entrare: verifica dell'età. Questo sito usa cookie.\nSì\nNo")).to.be.true;
    });

    it('does not flag a cookie notice that states an age and offers essential-only cookies', () => {
        expect(isExcludedPopup('You must be 18+ to use this site.\nWe use cookies to remember your preferences.\nEssential only\nAccept'))
            .to.be.false;
        expect(isExcludedPopup('You must be 18 to use this site.\nWe use cookies.\nOnly necessary\nAccept all')).to.be.false;
    });

    it('suppresses every match of an excluded popup, and leaves page text alone', () => {
        const gate = 'Age verification\nYou must be over 18 years old to enter. This site uses cookies.\nAccept all';
        const popup = checkHeuristicPatterns(gate, 'popup');
        expect(popup.patterns).to.have.length(0);
        expect(popup.suppressed.map((s) => s.negative)).to.include('age-gate-popup');
        expect(hasHeuristicPatterns(gate, 'popup')).to.be.false;
        expect(excludedBy(gate, 'page')).to.have.length(0);
    });
});

describe('cleanButtonText', () => {
    it('converts to lowercase', () => {
        expect(cleanButtonText('REJECT ALL')).to.equal('reject all');
    });

    it('removes arrows and special characters', () => {
        expect(cleanButtonText('Reject All →')).to.equal('reject all');
        expect(cleanButtonText('« Reject »')).to.equal('reject');
        expect(cleanButtonText('Reject >')).to.equal('reject');
    });

    it('removes emojis', () => {
        expect(cleanButtonText('Reject 🍪')).to.equal('reject');
        expect(cleanButtonText('❌ Reject')).to.equal('reject');
    });

    it('normalizes whitespace', () => {
        expect(cleanButtonText('  Reject   All  ')).to.equal('reject all');
        expect(cleanButtonText('Reject\n\nAll')).to.equal('reject all');
    });

    it('handles empty string', () => {
        expect(cleanButtonText('')).to.equal('');
    });
});

describe('classifyButtonTextRegex', () => {
    it('matches reject patterns', () => {
        expect(classifyButtonTextRegex('Reject All')).to.equal('reject');
    });

    it('does not match never match patterns', () => {
        expect(classifyButtonTextRegex('reject and pay')).to.equal('other');
    });

    it('matches "except strictly necessary" qualifier', () => {
        // OneTrust on apnews.com labels the reject button "I Reject All (except Strictly Necessary)"
        expect(classifyButtonTextRegex('I Reject All (except Strictly Necessary)')).to.equal('reject');
        expect(classifyButtonTextRegex('Reject All (except Strictly Necessary)')).to.equal('reject');
        expect(classifyButtonTextRegex('Reject All (except Necessary)')).to.equal('reject');
    });

    it('matches "do not accept" variants', () => {
        expect(classifyButtonTextRegex('I do not accept')).to.equal('reject');
        expect(classifyButtonTextRegex('Do not accept cookies')).to.equal('reject');
        expect(classifyButtonTextRegex('I do not accept the use of cookies')).to.equal('reject');
    });

    it('matches CCPA "do not sell/share" variants', () => {
        expect(classifyButtonTextRegex('Do Not Sell or Share My Personal Information')).to.equal('reject');
        expect(classifyButtonTextRegex('Do Not Share My Personal Information')).to.equal('reject');
        expect(classifyButtonTextRegex('Do not share my data')).to.equal('reject');
    });

    it('matches German continue-without-accepting variants', () => {
        expect(classifyButtonTextRegex('Ohne Akzeptieren fortfahren')).to.equal('reject');
        expect(classifyButtonTextRegex('Ohne zu akzeptieren fortfahren')).to.equal('reject');
        expect(classifyButtonTextRegex('Weiter ohne Zustimmung')).to.equal('reject');
        expect(classifyButtonTextRegex('Cookies akzeptieren')).to.equal('accept');
    });

    it('returns other for empty string', () => {
        expect(classifyButtonTextRegex('')).to.equal('other');
    });

    it('supports exact string patterns', () => {
        expect(classifyButtonTextRegex('no')).to.equal('reject');
    });

    it('classifies essential-only buttons as reject choices', () => {
        expect(classifyButtonTextRegex('Essential Only')).to.equal('reject');
        expect(classifyButtonTextRegex('Only use essential cookies')).to.equal('reject');
        expect(classifyButtonTextRegex('Only accept necessary cookies')).to.equal('reject');
        expect(classifyButtonTextRegex('Essential only cookies')).to.equal('reject');
    });

    it('does not classify bare essential category labels as reject choices', () => {
        expect(classifyButtonTextRegex('Essential')).to.equal('other');
    });

    it('does not match partial exact string patterns', () => {
        expect(classifyButtonTextRegex('no problem')).to.equal('other');
    });

    it('matches Russian reject buttons', () => {
        expect(classifyButtonTextRegex('Отклонить всё')).to.equal('reject');
        expect(classifyButtonTextRegex('Отклонить все файлы cookie')).to.equal('reject');
        expect(classifyButtonTextRegex('Отказаться')).to.equal('reject');
        expect(classifyButtonTextRegex('Только необходимые')).to.equal('reject');
        expect(classifyButtonTextRegex('Принимать только необходимые файлы cookie')).to.equal('reject');
        expect(classifyButtonTextRegex('Только необходимые куки')).to.equal('reject');
        expect(classifyButtonTextRegex('Отклонить куки')).to.equal('reject');
        expect(classifyButtonTextRegex('Не принимаю')).to.equal('reject');
    });

    it('matches Japanese reject buttons', () => {
        expect(classifyButtonTextRegex('拒否')).to.equal('reject');
        expect(classifyButtonTextRegex('すべて拒否')).to.equal('reject');
        expect(classifyButtonTextRegex('全て拒否する')).to.equal('reject');
        expect(classifyButtonTextRegex('Cookieを拒否')).to.equal('reject');
        expect(classifyButtonTextRegex('同意しない')).to.equal('reject');
        expect(classifyButtonTextRegex('すべて　拒否')).to.equal('reject');
        expect(classifyButtonTextRegex('同意しません')).to.equal('reject');
        expect(classifyButtonTextRegex('同意して続ける')).not.to.equal('reject');
    });

    it('matches Danish reject buttons', () => {
        expect(classifyButtonTextRegex('Nej tak')).to.equal('reject');
        expect(classifyButtonTextRegex('Nej, tak')).to.equal('reject');
        expect(classifyButtonTextRegex('Afvis alle')).to.equal('reject');
        expect(classifyButtonTextRegex('Afvis cookies')).to.equal('reject');
        expect(classifyButtonTextRegex('Kun nødvendige')).to.equal('reject');
        expect(classifyButtonTextRegex('Tillad kun nødvendige cookies')).to.equal('reject');
        expect(classifyButtonTextRegex('Ja tak')).not.to.equal('reject');
        expect(classifyButtonTextRegex('Læs mere om brugen af cookies på sundhed.dk')).not.to.equal('reject');
    });

    it('matches Russian settings buttons', () => {
        expect(classifyButtonTextRegex('Настроить')).to.equal('settings');
        expect(classifyButtonTextRegex('Настройки')).to.equal('settings');
        expect(classifyButtonTextRegex('Настроить файлы cookie')).to.equal('settings');
        expect(classifyButtonTextRegex('Настройки куки')).to.equal('settings');
        expect(classifyButtonTextRegex('Параметры конфиденциальности')).to.equal('settings');
        expect(classifyButtonTextRegex('Мои предпочтения')).to.equal('settings');
        expect(classifyButtonTextRegex('Управление файлами cookie')).to.equal('settings');
        expect(classifyButtonTextRegex('Изменить настройки')).to.equal('settings');
        expect(classifyButtonTextRegex('Подробные настройки')).to.equal('settings');
    });

    it('does not treat Russian policy links as settings buttons', () => {
        expect(classifyButtonTextRegex('Подробнее')).to.equal('other');
        expect(classifyButtonTextRegex('Подробнее о cookie')).to.equal('other');
        expect(classifyButtonTextRegex('Подробнее о файлах cookie')).to.equal('other');
        expect(classifyButtonTextRegex('Политика конфиденциальности')).to.equal('other');
    });

    it('matches Russian acknowledge buttons', () => {
        expect(classifyButtonTextRegex('Понятно')).to.equal('acknowledge');
        expect(classifyButtonTextRegex('Всё понятно')).to.equal('acknowledge');
        expect(classifyButtonTextRegex('Хорошо')).to.equal('acknowledge');
        expect(classifyButtonTextRegex('Закрыть')).to.equal('acknowledge');
        expect(classifyButtonTextRegex('Закрыть уведомление о cookie')).to.equal('acknowledge');
        expect(classifyButtonTextRegex('Больше не показывать')).to.equal('acknowledge');
        expect(classifyButtonTextRegex('Продолжить')).to.equal('acknowledge');
    });

    it('treats Russian confirm and save buttons as acknowledge rather than accept', () => {
        expect(classifyButtonTextRegex('Подтвердить')).to.equal('acknowledge');
        expect(classifyButtonTextRegex('Подтверждаю')).to.equal('acknowledge');
        expect(classifyButtonTextRegex('Подтверждаю выбор')).to.equal('acknowledge');
        expect(classifyButtonTextRegex('Подтвердить мой выбор')).to.equal('acknowledge');
        expect(classifyButtonTextRegex('Сохранить настройки')).to.equal('acknowledge');
        expect(classifyButtonTextRegex('Сохранить выбор')).to.equal('acknowledge');
        expect(classifyButtonTextRegex('Сохранить и закрыть')).to.equal('acknowledge');
    });

    it('matches Catalan acknowledge buttons', () => {
        expect(classifyButtonTextRegex('Entenc')).to.equal('acknowledge');
        expect(classifyButtonTextRegex('Ho entenc')).to.equal('acknowledge');
        expect(classifyButtonTextRegex('Entès!')).to.equal('acknowledge');
        expect(classifyButtonTextRegex('Entesos')).to.equal('acknowledge');
    });

    it('matches Catalan necessary-only buttons as reject', () => {
        expect(classifyButtonTextRegex('Només les necessàries')).to.equal('reject');
        expect(classifyButtonTextRegex('Només necessàries')).to.equal('reject');
        expect(classifyButtonTextRegex('Necessàries')).to.equal('reject');
        expect(classifyButtonTextRegex('Acceptar només les galetes necessàries')).to.equal('reject');
        expect(classifyButtonTextRegex('Només galetes tècniques')).to.equal('reject');
        expect(classifyButtonTextRegex('Només les essencials')).to.equal('reject');
        expect(classifyButtonTextRegex('Continuar sense acceptar')).to.equal('reject');
    });

    it('matches Catalan settings buttons', () => {
        expect(classifyButtonTextRegex('Configuració')).to.equal('settings');
        expect(classifyButtonTextRegex('Personalitzar')).to.equal('settings');
        expect(classifyButtonTextRegex('Preferències')).to.equal('settings');
        expect(classifyButtonTextRegex('Més opcions')).to.equal('settings');
        expect(classifyButtonTextRegex('Configuració de galetes')).to.equal('settings');
        expect(classifyButtonTextRegex('Gestionar les meves preferències')).to.equal('settings');
        expect(classifyButtonTextRegex('Gestiona les galetes')).to.equal('settings');
    });

    it('does not treat Catalan save or accept buttons as settings or reject', () => {
        expect(classifyButtonTextRegex('Desar preferències')).to.not.equal('settings');
        expect(classifyButtonTextRegex('Acceptar')).to.equal('accept');
    });

    it('does not treat Russian subscription buttons as reject', () => {
        expect(classifyButtonTextRegex('Отказаться от подписки')).to.equal('other');
    });

    it('matches Russian accept buttons', () => {
        expect(classifyButtonTextRegex('Принять всё')).to.equal('accept');
        expect(classifyButtonTextRegex('Принять все файлы cookie')).to.equal('accept');
        expect(classifyButtonTextRegex('Разрешить куки')).to.equal('accept');
        expect(classifyButtonTextRegex('Принять куки-файлы')).to.equal('accept');
        expect(classifyButtonTextRegex('Я согласен')).to.equal('accept');
    });

    it('does not treat revoke links as reject buttons', () => {
        expect(classifyButtonTextRegex('Widerrufen')).to.equal('other');
    });

    it('classifies accept-and-close buttons as accept', () => {
        expect(classifyButtonTextRegex('Akzeptieren & Schließen')).to.equal('accept');
        expect(classifyButtonTextRegex('Akzeptieren und schließen')).to.equal('accept');
        expect(classifyButtonTextRegex('Zustimmen schliessen')).to.equal('accept');
        expect(classifyButtonTextRegex('Accepter fermer')).to.equal('accept');
        expect(classifyButtonTextRegex('Accepteren sluiten')).to.equal('accept');
    });
});

describe('classifyPopup', () => {
    function classify(texts: string[]) {
        return classifyPopup(texts.map((text) => ({ text, regexClassification: classifyButtonTextRegex(text) })));
    }

    it('dismisses a Catalan notice-only banner as tier1', () => {
        expect(classify(['Entenc'])).to.equal('tier1');
    });

    it('does not acknowledge a Catalan banner that offers necessary-only or settings', () => {
        expect(classify(['Entès', 'Només les necessàries'])).to.equal('reject');
        expect(classify(['Entès', 'Preferències'])).to.equal('none');
        expect(classify(['Entès', 'Personalitzar'])).to.equal('none');
    });
});

describe('classifyButtons', () => {
    it('separates reject buttons from other buttons', () => {
        const buttons: ButtonData[] = [
            { text: 'Accept All', element: document.createElement('button') },
            { text: 'Reject All', element: document.createElement('button') },
            { text: 'Settings', element: document.createElement('button') },
        ];

        classifyButtons(buttons);

        expect(rejectButtons(buttons)).to.have.length(1);
        expect(rejectButtons(buttons)[0].text).to.equal('Reject All');
        expect(nonRejectButtons(buttons)).to.have.length(2);
    });

    it('handles empty input', () => {
        const buttons: ButtonData[] = [];

        classifyButtons(buttons);

        expect(rejectButtons(buttons)).to.have.length(0);
        expect(nonRejectButtons(buttons)).to.have.length(0);
    });

    it('handles multiple reject buttons', () => {
        const buttons: ButtonData[] = [
            { text: 'Reject All', element: document.createElement('button') },
            { text: 'Deny', element: document.createElement('button') },
        ];

        classifyButtons(buttons);

        expect(rejectButtons(buttons)).to.have.length(2);
        expect(nonRejectButtons(buttons)).to.have.length(0);
    });

    it('sets regexClassification on all buttons', () => {
        const buttons: ButtonData[] = [
            { text: 'Accept All', element: document.createElement('button') },
            { text: 'Reject All', element: document.createElement('button') },
            { text: 'Settings', element: document.createElement('button') },
        ];

        classifyButtons(buttons);

        expect(buttons.every((b) => b.regexClassification)).to.be.true;
    });

    it('classifies accept buttons', () => {
        const buttons: ButtonData[] = [{ text: 'Accept All', element: document.createElement('button') }];

        classifyButtons(buttons);

        expect(rejectButtons(buttons)).to.have.length(0);
        expect(buttons).to.have.length(1);
        expect(buttons[0].regexClassification).to.equal('accept');
    });

    it('classifies acknowledge buttons', () => {
        const buttons: ButtonData[] = [
            { text: 'OK', element: document.createElement('button') },
            { text: 'I understand', element: document.createElement('button') },
        ];

        classifyButtons(buttons);

        expect(rejectButtons(buttons)).to.have.length(0);
        expect(buttons).to.have.length(2);
        expect(buttons.every((b) => b.regexClassification === 'acknowledge')).to.be.true;
    });

    it('classifies settings buttons', () => {
        const buttons: ButtonData[] = [
            { text: 'Settings', element: document.createElement('button') },
            { text: 'Cookie preferences', element: document.createElement('button') },
        ];

        classifyButtons(buttons);

        expect(rejectButtons(buttons)).to.have.length(0);
        expect(buttons).to.have.length(2);
        expect(buttons.every((b) => b.regexClassification === 'settings')).to.be.true;
    });

    it('classifies reject buttons with regexClassification', () => {
        const buttons: ButtonData[] = [{ text: 'Reject All', element: document.createElement('button') }];

        classifyButtons(buttons);

        expect(rejectButtons(buttons)).to.have.length(1);
        expect(rejectButtons(buttons)[0].regexClassification).to.equal('reject');
    });
});

describe('isDisabled', () => {
    it('returns true for button with disabled attribute', () => {
        const button = document.createElement('button');
        button.disabled = true;

        expect(isDisabled(button)).to.be.true;
    });

    it('returns false for enabled button', () => {
        const button = document.createElement('button');

        expect(isDisabled(button)).to.be.false;
    });

    it('returns true for element with disabled attribute (non-input)', () => {
        const div = document.createElement('div');
        div.setAttribute('disabled', '');

        expect(isDisabled(div)).to.be.true;
    });

    it('returns true for disabled input', () => {
        const input = document.createElement('input');
        input.disabled = true;

        expect(isDisabled(input)).to.be.true;
    });
});

describe('isDialogLikeElement', () => {
    it('returns true for open dialog element', () => {
        const dialog = document.createElement('dialog');
        dialog.setAttribute('open', '');
        expect(isDialogLikeElement(dialog)).to.be.true;
    });

    it('returns false for closed dialog element', () => {
        const dialog = document.createElement('dialog');
        expect(isDialogLikeElement(dialog)).to.be.false;
    });

    it('returns true for element with role="dialog"', () => {
        const div = document.createElement('div');
        div.setAttribute('role', 'dialog');
        expect(isDialogLikeElement(div)).to.be.true;
    });

    it('returns true for element with aria-modal="true"', () => {
        const div = document.createElement('div');
        div.setAttribute('aria-modal', 'true');
        expect(isDialogLikeElement(div)).to.be.true;
    });

    it('returns false for aria-modal="false"', () => {
        const div = document.createElement('div');
        div.setAttribute('aria-modal', 'false');
        expect(isDialogLikeElement(div)).to.be.false;
    });

    it('returns false for plain div', () => {
        const div = document.createElement('div');
        expect(isDialogLikeElement(div)).to.be.false;
    });

    it('returns false for element with unrelated role', () => {
        const div = document.createElement('div');
        div.setAttribute('role', 'button');
        expect(isDialogLikeElement(div)).to.be.false;
    });
});

describe('excludeContainers', () => {
    it('returns empty array for empty input', () => {
        expect(excludeContainers([])).to.have.length(0);
    });

    it('returns all elements if none contain others', () => {
        const el1 = document.createElement('div');
        const el2 = document.createElement('div');

        const result = excludeContainers([el1, el2]);

        expect(result).to.have.length(2);
    });

    it('excludes container elements', () => {
        const container = document.createElement('div');
        const child = document.createElement('button');
        container.appendChild(child);

        const result = excludeContainers([container, child]);

        expect(result).to.have.length(1);
        expect(result[0]).to.equal(child);
    });

    it('handles nested containers', () => {
        const outer = document.createElement('div');
        const middle = document.createElement('div');
        const inner = document.createElement('button');
        outer.appendChild(middle);
        middle.appendChild(inner);

        const result = excludeContainers([outer, middle, inner]);

        expect(result).to.have.length(1);
        expect(result[0]).to.equal(inner);
    });
    it('excludes a shadow host that contains another element in its shadow root', () => {
        const host = document.createElement('div');
        const inner = document.createElement('button');
        host.attachShadow({ mode: 'open' }).appendChild(inner);

        const result = excludeContainers([host, inner]);

        expect(result).to.deep.equal([inner]);
    });

    it('keeps the reversed input order', () => {
        const parent = document.createElement('div');
        const a = document.createElement('button');
        const b = document.createElement('button');
        const c = document.createElement('button');
        parent.append(a, b, c);

        expect(excludeContainers([parent, a, b, c])).to.deep.equal([c, b, a]);
    });

    it('handles thousands of elements quickly', () => {
        const parent = document.createElement('nav');
        const links = Array.from({ length: 5000 }, () => parent.appendChild(document.createElement('a')));

        const start = performance.now();
        const result = excludeContainers([parent, ...links]);

        expect(result).to.have.length(5000);
        expect(performance.now() - start).to.be.below(200);
    });
});

describe('getActionablePopups', () => {
    let container: HTMLDivElement;

    beforeEach(() => {
        container = document.createElement('div');
        document.body.appendChild(container);
    });

    afterEach(() => {
        container.remove();
    });

    it('keeps text-bearing popups that contain decorative sticky children', () => {
        container.innerHTML = `
            <div style="position: fixed; display: block;">
                <p>This website uses cookies to enhance your browsing experience.</p>
                <div style="position: sticky;"></div>
                <button>Essential Only</button>
            </div>
        `;

        const popups = getActionablePopups('tier2');

        expect(popups).to.have.length(1);
        expect(popups[0].regexClassification).to.equal('reject');
    });
});

describe('getButtonData', () => {
    let container: HTMLDivElement;

    beforeEach(() => {
        container = document.createElement('div');
        document.body.appendChild(container);
    });

    afterEach(() => {
        container.remove();
    });

    it('extracts button text', () => {
        container.innerHTML = '<button>Accept All</button><button>Reject All</button>';

        const buttons = getButtonData(container);

        expect(buttons).to.have.length(2);
        expect(buttons.map((b) => b.text)).to.include('Accept All');
        expect(buttons.map((b) => b.text)).to.include('Reject All');
    });

    it('extracts input button values', () => {
        container.innerHTML = '<input type="submit" value="Submit" /><input type="button" value="Cancel" />';

        const buttons = getButtonData(container);

        expect(buttons).to.have.length(2);
        expect(buttons.map((b) => b.text)).to.include('Submit');
        expect(buttons.map((b) => b.text)).to.include('Cancel');
    });

    it('extracts link text', () => {
        container.innerHTML = '<a href="#">Click here</a>';

        const buttons = getButtonData(container);

        expect(buttons).to.have.length(1);
        expect(buttons[0].text).to.equal('Click here');
    });

    it('extracts role="button" text', () => {
        container.innerHTML = '<span role="button">Custom Button</span>';

        const buttons = getButtonData(container);

        expect(buttons).to.have.length(1);
        expect(buttons[0].text).to.equal('Custom Button');
    });

    it('extracts button-like classnames', () => {
        container.innerHTML = '<div class="button primary">Primary</div>';

        const buttons = getButtonData(container);

        expect(buttons).to.have.length(1);
        expect(buttons[0].text).to.equal('Primary');
    });

    it('ignores disabled buttons', () => {
        container.innerHTML = '<button disabled>Disabled</button><button>Enabled</button>';

        const buttons = getButtonData(container);

        expect(buttons).to.have.length(1);
        expect(buttons[0].text).to.equal('Enabled');
    });

    it('ignores hidden buttons', () => {
        container.innerHTML = '<button style="display:none">Hidden</button><button>Visible</button>';

        const buttons = getButtonData(container);

        expect(buttons).to.have.length(1);
        expect(buttons[0].text).to.equal('Visible');
    });

    it('ignores buttons without text', () => {
        container.innerHTML = '<button></button><button>Has Text</button>';

        const buttons = getButtonData(container);

        expect(buttons).to.have.length(1);
        expect(buttons[0].text).to.equal('Has Text');
    });

    it('returns empty array if no buttons found', () => {
        container.innerHTML = '<div>No buttons here</div>';

        const buttons = getButtonData(container);

        expect(buttons).to.have.length(0);
    });

    it('trims button text', () => {
        container.innerHTML = '<button>  Spaced Text  </button>';

        const buttons = getButtonData(container);

        expect(buttons).to.have.length(1);
        expect(buttons[0].text).to.equal('Spaced Text');
    });
});

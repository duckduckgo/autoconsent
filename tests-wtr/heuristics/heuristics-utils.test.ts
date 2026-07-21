import { expect } from '@esm-bundle/chai';
import {
    checkHeuristicPatterns,
    cleanButtonText,
    classifyButtonTextRegex,
    classifyButtons,
    isDisabled,
    excludeContainers,
    getButtonData,
    isDialogLikeElement,
    isExcludedPopup,
} from '../../lib/heuristics';
import { ButtonData } from '../../lib/types';

function rejectButtons(buttons: ButtonData[]) {
    return buttons.filter((b) => b.regexClassification === 'reject');
}

function nonRejectButtons(buttons: ButtonData[]) {
    return buttons.filter((b) => b.regexClassification !== 'reject');
}

describe('checkHeuristicPatterns', () => {
    it('detects cookie-related text', () => {
        const { patterns, snippets } = checkHeuristicPatterns('We use cookies here', [/we use cookies/gi]);

        expect(patterns.length).to.be.greaterThan(0);
        expect(snippets.length).to.be.greaterThan(0);
    });

    it('returns empty arrays for unrelated text', () => {
        const { patterns, snippets } = checkHeuristicPatterns('Welcome to our website', [/we use cookies/gi]);

        expect(patterns).to.have.length(0);
        expect(snippets).to.have.length(0);
    });

    it('returns empty arrays for empty text', () => {
        const { patterns, snippets } = checkHeuristicPatterns('', [/we use cookies/gi]);

        expect(patterns).to.have.length(0);
        expect(snippets).to.have.length(0);
    });

    it('does not match after the text limit', () => {
        const { patterns, snippets } = checkHeuristicPatterns('X'.repeat(100000) + 'We use cookies here', [/we use cookies/gi]);

        expect(patterns).to.have.length(0);
        expect(snippets).to.have.length(0);
    });

    it('handles non-global regex with optional capture groups without throwing', () => {
        // Regex from heuristic-patterns.ts (Polish) that has optional capture groups and
        // no `g` flag. `String.prototype.match` returns `undefined` entries for optional
        // groups that did not match, which used to crash the caller with a TypeError.
        const pattern = /(używamy|stosujemy)( są)?.{0,20} plik(i|ów|ach) cookie/i;
        const { patterns, snippets } = checkHeuristicPatterns('Używamy plików cookie i innych technologii', [pattern]);

        expect(patterns.length).to.be.greaterThan(0);
        expect(snippets.length).to.be.greaterThan(0);
        expect(snippets.every((s) => typeof s === 'string')).to.be.true;
    });
});

describe('isExcludedPopup', () => {
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

    it('returns other for empty string', () => {
        expect(classifyButtonTextRegex('')).to.equal('other');
    });

    it('supports exact string patterns', () => {
        expect(classifyButtonTextRegex('no')).to.equal('reject');
    });

    it('does not match partial exact string patterns', () => {
        expect(classifyButtonTextRegex('no problem')).to.equal('other');
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

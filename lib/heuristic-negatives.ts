/**
 * Context negatives for heuristic detect patterns: wording that shows a match, or a whole popup, isn't a consent notice.
 * The vocabulary they test (consent choices, age wording, leave buttons, legal clauses) is defined here, next to them.
 * See docs/heuristic-detection.md.
 */
import {
    HeuristicInput,
    ACCEPTEZ_UTILISATION,
    ACCEPT_ALL,
    BY_CONTINUING_PRIVACY,
    DE_COOKIE_VERB,
    GEBRUIK_VAN_COOKIES,
    USE_OF_COOKIES,
    UTILISATION_DES_COOKIES,
    VERWENDUNG_VON_COOKIES,
} from './heuristic-patterns';

/** A test on a text: a regex that must match it, or a predicate. */
export type TextTest = RegExp | ((text: string) => boolean);
/**
 * Drops a single detect pattern match when its context matches `pattern` and not `unless` (with only `unless`, when the
 * context lacks it). The context is `window` chars either side of the match, or its line and `lines` lines either side
 * ([before, after] counts each side); the default is 150 chars. With `whole`, the context is the whole text, so a hit
 * drops every match: the text is excluded. `appliesTo` limits it to some detect patterns.
 */
export type ContextNegative = {
    name: string;
    pattern?: RegExp;
    unless?: TextTest;
    window?: number;
    lines?: number | [number, number];
    whole?: boolean;
    input?: HeuristicInput;
    appliesTo?: RegExp[];
};

// a cookie choice or dismiss control, or consent dialog wording, in the core languages, except a bare accept
const COOKIE_CHOICE = [
    '\\b(?:accept|reject|decline|refuse|deny|allow|manage|customi[sz]e)\\b[^\\n]{0,25}\\bcookies?\\b',
    '\\b(?:reject|decline|deny|refuse) all\\b',
    '\\b(?:essential|necessary|required) (?:cookies )?only\\b|\\bonly (?:essential|necessary|required)\\b',
    '\\bcookies? (?:notice|settings|preferences|banner)\\b',
    '\\b(?:alle )?(?:cookies )?ablehnen\\b',
    '\\b(?:alles |alle cookies )?(?:weigeren|weiger|afwijzen)\\b',
    '\\b(?:tout )?refuser\\b',
    '\\brechazar(?: todas?)?\\b',
    '\\brifiuta(?: tutti)?\\b',
    // purposes and vendors as a button or heading line: some consent dialogs ask "under 18?"
    '^[^\\n]{0,40}\\b(?:purposes|finalités|propósitos|zwecke|doeleinden|finalità|vendors|fournisseurs|proveedores|leveranciers|fornitori)(?!\\w)[^\\n]{0,10}$',
    '\\b(?:legitimate (?:business )?interest|intérêt légitime|interés legítimo|berechtigtes interesse|gerechtvaardigd belang|legittimo interesse)\\b',
    '\\b(?:we|nous|wir|wij|noi|nosotros) (?:and|et|und|en|e|y) (?:our|nos|unsere|onze|i nostri|nuestros) (?:\\d+ )?(?:partners|partenaires|partner|socios)\\b',
].join('|');
// a bare accept or allow (all), which can also be an age gate's own confirmation
const BARE_ACCEPT = [
    '\\b(?:accept|allow) all\\b',
    '\\b(?:alle )?(?:cookies )?(?:akzeptieren|erlauben|zulassen)\\b',
    '\\b(?:alles |alle cookies )?(?:accepteren|accepteer|toestaan)\\b',
    '\\b(?:tout )?accepter\\b',
    '\\baceptar(?: todas?)?\\b',
    '\\baccetta(?: tutti)?\\b',
].join('|');
const COOKIE_CHOICE_RE = new RegExp(COOKIE_CHOICE, 'im');
const CONSENT_CHOICE = new RegExp(`${COOKIE_CHOICE}|${BARE_ACCEPT}`, 'im');

// an age limit, an adults-only statement or an age check, in the core languages
const AGE_WORDING = new RegExp(
    [
        '\\b(?:over|above|at least|older than|minimum(?: age of)?)\\s*(?:18|21|eighteen)\\b',
        // "18+" only with age words after it: a bare "18+" also appears in cookie banners on adult sites
        '\\b(?:18|21)\\+?\\s*(?:years?(?: of age| old)?|yo|or older|or over)\\b',
        '\\b(?:you|users?|visitors?) must be (?:over |above |at least )?(?:18|21)\\b',
        "\\b(?:i'?m|i am) (?:over |at least )?(?:18|21)\\b",
        '\\bage (?:verification|confirmation|check|gate|restriction)\\b',
        '\\b(?:adults? only|adult[\\s-](?:oriented|content|material|website)|legal age|age of majority|not a minor|minors)\\b',
        '\\b(?:18|21) jahre\\b',
        '\\balters(?:beschränkung|bestätigung|verifikation|prüfung|kontrolle)',
        '\\b(?:volljährig|für erwachsene|minderjährige)\\b',
        '\\b(?:18|21) jaar\\b',
        '\\b(?:volwassenen|meerderjarig|minderjarigen|leeftijdsverificatie)\\b',
        '\\b(?:18|21) ans\\b',
        // no \\b before an accented letter: without the u flag it is not a word character
        '\\b(?:pour adultes|vérification de l.âge|mineurs)\\b|âge légal\\b',
        '\\b(?:18|21) años\\b',
        '\\b(?:mayor(?:es)? de edad|menores de edad|para adultos|verificación de edad)\\b',
        '\\b(?:18|21) anni\\b',
        '\\b(?:maggiorenne|minorenni|per adulti)\\b|\\bverifica dell.età(?!\\w)',
    ].join('|'),
    'i',
);

// a dismiss or consent button on its own line, as innerText keeps it
const DISMISS_LINE =
    /^\s*(?:(?:yes,? )?(?:i )?(?:ok(?:ay)?|accept|agree|allow|decline|deny|reject|refuse|understand|acknowledge(?: the use of cookies)?|got it|understood)(?: all)?(?:,? (?:and|&) (?:continue|close))?(?: non-essential)?|close|dismiss|akzeptieren|zustimmen|verstanden|einverstanden|ablehnen|accepteren|akkoord|weigeren|accepter|j.accepte|d.accord|refuser|fermer|aceptar|acepto|rechazar|entendido|accetto|accetta|rifiuta|ho capito|chiudi)\s*[!.]?\s*$/im;
// a dismiss button at the end of a notice's line, or a close control
const DISMISS_END = /[.!?]\s+(?:ok(?:ay)?|got it|i agree|accept)\s*!?\s*$|\[\s*[x×]\s*\]|^\s*[x×✕]\s*$/im;
const NOTICE_CONTROL = new RegExp(`${CONSENT_CHOICE.source}|${DISMISS_LINE.source}|${DISMISS_END.source}`, 'im');
// an age gate's leave button on its own line, or "I am under 18" in the core languages
const LEAVE_LINE =
    /^\s*(?:(?:no,? )?(?:i )?(?:want to )?(?:leave|exit|verlassen|quitter|sortir|salir|abandonar|esci|uscire|verlaten)\b[^\n]{0,30}|no,? take me away|(?:seite|hier) verlassen|(?:i am|i'm|ich bin|ik ben|je suis|soy|sono) (?:under|unter|onder|jonger dan|menor de(?: edad)?|minorenne|mineur)\b[^\n]{0,10})\s*[!.]?\s*$/im;
// a notice's own control: manage or configure cookies, a bare settings button line, or "close this popup"
const NOTICE_OWN_CONTROL = new RegExp(
    [
        '\\bcookies? verwalten\\b|\\bcookie-?(?:einstellungen|präferenzen)\\b|\\beinstellungen verwalten\\b',
        '\\bconfigura(?:r|ción de)(?: las)? cookies\\b|\\bgestionar(?: las)? cookies\\b|\\bpersonalizar(?: las)? cookies\\b',
        '\\bparam[ée]trer(?: les)? cookies\\b|\\bparam[èe]tres(?: des)? cookies\\b|\\bg[ée]rer(?: les)? cookies\\b|\\bpersonnaliser(?: les)? cookies\\b',
        '\\bgestisci(?: i)? cookie|\\bimpostazioni(?: dei| sui)? cookie|\\bpersonalizza(?: i)? cookie',
        '\\bcookie-?instellingen\\b|\\bcookies? beheren\\b|\\bvoorkeuren (?:beheren|aanpassen)\\b',
        '^\\s*(?:customi[sz]e|personnaliser|paramétrer|personalizar|configurar|personalizza|anpassen|aanpassen|meer opties|more options|weitere optionen|plus d.options|más opciones|altre opzioni|manage (?:options|preferences|choices))\\s*$',
        '^\\s*close (?:this|the) (?:popup|banner|notice|message)\\s*$',
    ].join('|'),
    'im',
);
// the age-gate exclusions' unless: a consent or notice control, and no leave button. An age gate's "OK" next to "Leave"
// confirms the age, not cookies.
const ageGateUnless =
    (control: RegExp) =>
    (text: string): boolean =>
        !LEAVE_LINE.test(text) && (control.test(text) || NOTICE_OWN_CONTROL.test(text));
// consent vocabulary beyond "privacy", for patterns that also match terms of use and login text
const CONSENT_WORDS =
    /cookie|consent|track|partner|personali[sz]|advertis|analytic|privacy (?:options|choices|settings|rights)|do not sell|opt[- ]out/i;

// license and terms clauses that cookie notices never contain, so a popup with them is a legal agreement
const LEGAL_AGREEMENT =
    /\b(?:end[- ]user licen[cs]e agreement|licen[cs]e agreement|limitation of liability|governing law|indemnif\w*|hereunder|disclaimers? of warrant\w*|warrant(?:y|ies) of merchantability)\b/i;

// drop single matches whose context shows the text isn't a consent notice, or whole popups that aren't one
export const DETECT_CONTEXT_NEGATIVES: ContextNegative[] = [
    // popups with their own age confirmation are age gates, even when they mention cookies; a bare accept doesn't count
    // as a cookie choice here, since it may confirm the age
    { name: 'age-gate-popup', pattern: AGE_WORDING, unless: ageGateUnless(COOKIE_CHOICE_RE), whole: true, input: 'popup' },
    // a license or terms agreement may mention cookies, and its decline button must not be clicked as a cookie reject
    { name: 'legal-agreement', pattern: LEGAL_AGREEMENT, whole: true, input: 'popup' },
    // page text next to an age gate, unless a consent control is there too
    { name: 'age-gate', pattern: AGE_WORDING, unless: ageGateUnless(NOTICE_CONTROL), lines: [4, 5], input: 'page' },
    // terms of use need cookie or consent wording; a privacy-policy-only notice needs that or a button
    {
        name: 'terms-without-consent',
        pattern: /\bterms\b|\bconditions\b/i,
        unless: CONSENT_WORDS,
        appliesTo: [BY_CONTINUING_PRIVACY],
    },
    {
        name: 'privacy-without-control',
        unless: new RegExp(`${CONSENT_WORDS.source}|${DISMISS_LINE.source}`, 'im'),
        appliesTo: [BY_CONTINUING_PRIVACY],
    },
    // a cookie policy link among short footer link lines
    {
        name: 'footer-link',
        pattern: /^[^.!?:\n]{0,60}\n[\s]*\n?[^.!?:\s][^.!?:\n]{0,59}(?:\n|$)/,
        unless: NOTICE_CONTROL,
        lines: [0, 2],
        input: 'page',
        appliesTo: [USE_OF_COOKIES, VERWENDUNG_VON_COOKIES, UTILISATION_DES_COOKIES, GEBRUIK_VAN_COOKIES],
    },
    // "accept all" in prose; case-sensitive since button labels run together in innerText
    {
        name: 'accept-all-prose',
        pattern: /\baccept all [a-z]|\baccept All[a-z]/,
        unless: /accept all (?:cookies|and|&)/i,
        window: 15,
        appliesTo: [ACCEPT_ALL],
    },
    {
        name: 'acceptez-terms',
        pattern: /conditions (?:générales )?d.utilisation|\bcgu\b/i,
        unless: /cookie|témoin|traceur|partenaire/i,
        appliesTo: [ACCEPTEZ_UTILISATION],
    },
    // the same sentence is also a footer line with only a "learn more" link
    { name: 'de-cookie-verb-needs-control', unless: NOTICE_CONTROL, lines: [1, 6], input: 'page', appliesTo: [DE_COOKIE_VERB] },
];

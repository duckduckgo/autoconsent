// TODO: check for false positive detections per pattern
// these patterns are matched against popup-like elements or full document text to detect unknown cookie popups
export const DETECT_PATTERNS = [
    /accept cookies/gi,
    /accept all/gi,
    /reject all/gi,
    /only necessary cookies/gi, // "only necessary" is probably too broad
    /(?:by continuing.{0,100}cookie)|(?:cookie.{0,100}by continuing)/gi,
    /(?:by continuing.{0,100}privacy)|(?:privacy.{0,100}by continuing)/gi,
    /we (?:use|serve)(?: optional)? cookies/gi,
    /we are using cookies/gi,
    /use of cookies/gi,
    /(?:this|our) (?:web)?site.{0,100}cookies/gi,
    /cookies (?:and|or) .{0,100} technologies/gi,
    /such as cookies/gi,
    /read more about.{0,100}cookies/gi,
    /consent to.{0,100}cookies/gi,
    /we and our partners.{0,100}cookies/gi,
    /we.{0,100}store.{0,100}information.{0,100}such as.{0,100}cookies/gi,
    /store and\/or access information.{0,100}on a device/gi,
    /personalised ads and content, ad and content measurement/gi,

    // it might be tempting to add the patterns below, but they cause too many false positives. Don't do it :)
    // /cookies? settings/i,
    // /cookies? preferences/i,

    // FR
    /utilisons.{0,100}des.{0,100}cookies/gi,
    /des.{0,100}cookies.{0,100}pour/gi,
    /retirer.{0,100}votre.{0,100}consentement/gi,
    /et.{0,100}nos.{0,100}partenaires/gi,
    /publicités.{0,100}et.{0,100}du.{0,100}contenu/gi,
    /utilise.{0,100}des.{0,100}cookies/gi,
    /utilisent.{0,100}des.{0,100}cookies/gi,
    /stocker.{0,100}et.{0,100}ou.{0,100}accéder/gi,
    /consentement.{0,100}à.{0,100}tout.{0,100}moment/gi,
    /votre.{0,100}consentement/gi,
    /accepter.{0,100}tout/gi,
    /utilisation.{0,100}des.{0,100}cookies/gi,
    /cookies.{0,100}ou.{0,100}technologies/gi,
    /acceptez.{0,100}l.{0,100}utilisation/gi,
    /continuer sans accepter/gi,
    /tout refuser/gi,
    /(?:refuser|rejeter) tous les cookies/gi,
    /je refuse/gi,
    /refuser et continuer/gi,
    /refuser les cookies/gi,
    /seulement nécessaires/gi,
    /je désactive les finalités non essentielles/gi,
    /cookies essentiels uniquement/gi,
    /nécessaires uniquement/gi,

    // DE
    /wir.{0,100}verwenden.{0,100}cookies/gi,
    /wir.{0,100}und.{0,100}unsere.{0,100}partner/gi,
    /zugriff.{0,100}auf.{0,100}informationen.{0,100}auf/gi,
    /inhalte.{0,100}messung.{0,100}von.{0,100}werbeleistung.{0,100}und/gi,
    /cookies.{0,100}und.{0,100}andere/gi,
    /verwendung.{0,100}von.{0,100}cookies/gi,
    /wir.{0,100}nutzen.{0,100}cookies/gi,
    /verwendet.{0,100}cookies/gi,
    /sie.{0,100}können.{0,100}ihre.{0,100}auswahl/gi,
    /und.{0,100}ähnliche.{0,100}technologien/gi,
    /cookies.{0,100}wir.{0,100}verwenden/gi,

    /alles?.{0,100}ablehnen/gi,
    /(?:nur|nicht).{0,100}(?:zusätzliche|essenzielle|funktionale|notwendige|erforderliche).{0,100}(?:cookies|akzeptieren|erlauben|ablehnen)/gi,
    /weiter.{0,100}(?:ohne|mit).{0,100}(?:einwilligung|zustimmung|cookies)/gi,
    /(?:cookies|einwilligung).{0,100}ablehnen/gi,
    /nur funktionale cookies akzeptieren/gi,
    /optionale ablehnen/gi,
    /zustimmung verweigern/gi,

    // NL
    /gebruik.{0,100}van.{0,100}cookies/gi,
    /(?:we|wij).{0,100}gebruiken.{0,100}cookies.{0,100}om/gi,
    /cookies.{0,100}en.{0,100}vergelijkbare/gi,

    /(?:alles|cookies).{0,100}(?:afwijzen|weigeren|verwerpen)/gi,
    /alleen.{0,100}noodzakelijke?\b/gi,
    /cookies weigeren/gi,
    /weiger.{0,100}(?:cookies|alles)/gi,
    /doorgaan zonder (?:te accepteren|akkoord te gaan)/gi,
    /alleen.{0,100}(?:optionele|functionele|functioneel|noodzakelijke|essentiële).{0,100}cookies/gi,
    /wijs alles af/gi,

    // Spanish (ES)
    /(si|al) contin[úu]a[sr]?( navegando)?.{0,100} cookie/gi,
    /(usamos|utilizar?|utilizamos)( (tanto|las))?.{0,20}cookie/gi,
    /\b(hacemos|hace) uso de cookies\b/gi,
    /\busa cookies de google\b/gi,
    /acepta.{0,80} uso de cookies/gi,
    /al utilizar nuestro sitio web.{0,80}cookie/gi,
    /almacenar la información en un dispositivo y\/?o acceder a ella/gi,
    /cookie.{0,30} utiliza/gi,
    /cookies propias y de/gi,
    /cookies.{0,80}son necesarias/gi,
    /est[ea] (sitio|página|web)( web)?( también)? (usa|utiliza|requiere del uso de|se sirven|emplea) cookies?/gi,
    /navegando.{0,100}cookie/gi,
    /nosotros y nuestros( \d+)? (socios|proveedores).{0,180} cookies/gi,
    /recopilamos y almacenamos datos de usted y de su dispositivo/gi,
    /utilizamos tecnolog[ií]as como las cookies/gi,

    // Polish (PL)
    // examples:
    //  wykorzystuje pliki cookie (uses cookies)
    //  Wykorzystujemy informacje w plikach cookie (We use information in cookies)
    /(używamy|stosujemy|stosuje|wykorzystujemy|wykorzyst(uje|ywane))( są)?.{0,20} plik(i|ów|ach) cookie/gi,
    /(używać|używamy).{0,80} (ciasteczek|cookie)/gi,
    /cele przetwarzania twoich danych przez zaufanych partnerów iab/gi,
    /dzięki (plikom cookie|ciasteczkom|cookie)/gi,
    /korzysta.{0,80} plików cookie/gi,
    /korzystamy z technologii, takich jak pliki cookie/gi,
    /korzystamy.{0,50} cookies/gi,
    /niektóre pliki cookies/gi,
    /pliki cookies i pokrewne im technologie umożliwiają poprawne działanie strony i pomagają nam dostosować ofertę do twoich potrzeb/gi,
    /przechowywanie informacji na urządzeniu lub dostęp do nich/gi,
    /przechowywanie plików cookie na swoim urządzeniu/gi,
    /przechowywać i uzyskiwać dostęp do informacji na twoich urządzeniach/gi,
    /przetwarzamy.{0,80} cookie/gi,
    /strona.{0,50} używa (ciasteczek|cookie)/gi,
    /ta strona korzysta z ciasteczek/gi,
    /uzyskujemy dostęp i przechowujemy informacje na urządzeniu/gi,
    /używa plik[ió]w? cookie/gi,
    /używamy plików.{0,20}cookie/gi,
    /wykorzystują .{0,100}cookie/gi,
    /za pomocą plików cookies.{0,100} my lub nasi partnerzy/gi,
    /zgodą my i nasi partnerzy możemy wykorzystywać precyzyjne dane geolokalizacyjne i identyfikację/gi,

    // Catalan (CA)
    /cookies pròpies i de tercers/gi,
    /utilitzem galetes/gi,
    /\búnicament utilitza galetes pròpies amb finalitat tècnica\b/gi,
    /este lloc web utilitza només cookies tècniques necessàries per al seu funcionament/gi,
    /utilitza cookies tècniques,\s*de personalització i anàlisi/gi,
    /utilitzem cookies i altres tecnologies/gi,

    // Basque (EU)
    /cookie propio eta hirugarrenenak helburu teknikoarekin erabiltzen ditu/gi,
    /cookie propioak eta hirugarrenen cookieak erabiltzen ditugu/gi,
    /cookie propioak eta hirugarrenenak helburu teknikoarekin erabiltzen ditu/gi,
    /cookie[-\s]*ak erabiltzen ditu/gi,
    /cookieak erabiltzen ditu/gi,
    /guk eta gure \d+ bazkideek cookieak eta identifikadoreak erabiltzen ditugu/gi,
    /norberaren eta hirugarrenen cookie-?ak baino ez ditu erabiltzen/gi,
    /web orri honek cookieak erabiltzen ditu/gi,
    /webgune honek cookie propioak eta hirugarrenen cookie-fitxategiak erabiltzen ditu/gi,

    // Galician (GL)
    /^\s*empregamos cookies propias\b/gi,
    /este portal emprega cookies propias ou de terceiros con fins analíticos/gi,

    // Russian (RU)
    /мы используем файлы cookie и аналогичные технологии/gi,

    // Italian (IT)
    /usiamo.{0,20}cookie/gi,
];

const REJECT_PATTERNS_ENGLISH = [
    // e.g. "reject", "reject all", "reject all cookies", "deny all", "refuse cookies", "decline",
    // "reject non-essential cookies", "reject unnecessary cookies", "reject all but necessary", "reject all and close"
    // note that "reject and subscribe" and "reject and pay" are excluded via NEVER_MATCH_PATTERNS
    /^\s*(no,?\s*)?(i\s+)?(reject|deny|refuse|decline|disable)\s*(all)?\s*(but|except)?\s*(non[- ]?essential|un(necessary|required)|optional|additional|targeting|analytics|marketing|non[- ]?necessary|extra|tracking|advertising|necessary|essential)?\s*(cookies)?\s*(and\s+close)?\s*$/is,

    // e.g. "i do not accept", "do not accept cookies"
    /^\s*(i\s+)?do\s+not\s+accept\s*(cookies)?\s*$/is,

    // e.g. "continue without accepting", "continue without agreeing", "continue without agreeing →"
    /^\s*(continue|proceed|continue\s+browsing)\s+without\s+(accepting|agreeing|consent|cookies|tracking)(\s*→)?\s*$/is,

    // essential/necessary/functional-only, e.g. "essential cookies only", "accept only essential cookies",
    // "allow necessary cookies continue", "use essential cookies only", "functional only", "i confirm necessary"
    // note that a necessary/essential/functional word is required
    /^\s*(i\s+)?(want\s+to\s+)?(only\s+)?(use|accept|allow|keep|enable|choose|continue\s+with|i\s+confirm)?\s*(only\s+)?(strictly\s+)?(necessary|essential|essentials|functional|required|minimal)\s*(only\s+)?(cookies)?\s*(continue|only)?\s*$/is,

    // e.g. "do not sell or share my personal information", "opt out of sale ..." (CCPA)
    /do\s+not\s+sell|opt\s+out\s+of\s+sale/is,

    // e.g. "opt-out of sale/share or targeted advertising", "opt-out of advertising/social media cookies"
    /^opt[ -]?out of /is,

    // e.g. "reject all except strictly necessary", "reject all (except necessary cookies)"
    /except\s+(strictly\s+)?necessary/is,

    // e.g. "disagree", "i disagree", "disagree and close"
    /^(i\s+)?disagree\s*(and\s+close)?$/i,

    'no',
    /^no,? thank(s| you)$/is,
    /^opt[ -]out$/is,
    'dont enable',
    'withdraw consent',
    'i do not agree',
];

const REJECT_PATTERNS_DUTCH = [
    // weigeren / afwijzen / verwerpen (reject verbs, any position)
    /weiger|afwijz|verwerp/is,

    // "wijs (alles/ze) af" (reject verb with split particle)
    /wijs\b.*\baf\b/is,

    // "alleen/enkel/uitsluitend ... (noodzakelijk|functioneel|essentieel|...)"
    /(^|\s)(alleen|enkel|uitsluitend)\s+.{0,20}(noodzakelijk|functione|essenti|vereiste|verplichte|strikt|minimale|basis|basic|standaard)/is,

    // essential/necessary-only nouns
    /^\s*(accepteer\s+|aanvaard\s+|gebruik\s+|sta\s+|ik wil\s+)?(alleen\s+|enkel\s+|uitsluitend\s+|strikt\s+)?(de\s+)?(noodzakelijke?|functionele?|functioneel|essentiële|essentieel|vereiste|verplichte|minimale|basiscookies|basis|standaard)\s*(cookies?)?\s*(accepteren|toestaan|aanvaarden)?\s*$/is,

    // continue without accepting / consent
    /(doorgaan|ga door|ga verder|verder)\s+.{0,15}(zonder|aanvaard)/is,

    // "nee" refusals (but not "nee, sluiten" → acknowledge)
    /^nee(,?\s+(bedankt|dank je|dankje|liever niet|liever geen cookies|geen persoonlijke cookies|geen cookies.*|weigeren?))?$/is,

    'niet accepteren',
    'niet akkoord',
    'ik ga niet akkoord',
    'liever niet',
    'geen cookies toestaan',
    'liever geen cookies',
    'functioneel altijd actief',
];

const REJECT_PATTERNS_FRENCH = [
    // refuser / rejeter / interdire / décliner (reject verbs, any position)
    // "refuser et s'abonner" / "refuser et payer" are excluded via NEVER_MATCH_PATTERNS
    /(^|\s)(refus|rejet|rejeter|interdire|interdis|déclin|declin)/is,

    // only necessary / essential / technical / functional
    /(uniquement|seulement|indispensable|strictement nécessaire|que les cookies\s+(nécessaires|techniques|essentiels|indispensables|fonctionnels))/is,

    // continue/proceed without accepting; refuse everything; disable purposes
    /(sans accepter|ne pas accepter|je naccepte rien|je désactive)/is,

    // "non" / "non, merci"
    /^non(,?\s+merci\.?)?$/is,
];

const REJECT_PATTERNS_GERMAN = [
    // "... ablehnen" / "ablehnen ..." (reject/decline). Exclude the settings-list phrase "einstell(ungen|en) oder ablehnen".
    /^(?!einstell(ungen|en) oder ablehnen$).*ablehnen/is,

    // verweigern / verweigere / verweigert (refuse)
    /verweiger/is,

    // essential/necessary/functional-only variants (accepting only necessary → reject)
    /^\s*(nur|ausschließlich|lediglich|weiter\s+mit|mit|akzeptiere?n?|unbedingt|es\s+werden\s+nur)?\s*(technisch\s+)?(notwendige?[nrs]?|essenzielle?[nrs]?|essentielle?[nrs]?|erforderliche?[nrs]?|funktionale?[nrs]?|funktionelle?[nrs]?|wesentliche?[nrs]?)\s*(cookies?|technologien|funktionscookies|dienste)?\s*(akzeptieren|erlauben|zulassen|verwenden|annehmen|setzen|speichern|zustimmen|auswählen)?\.?\s*$/is,

    // continue without consent
    /(^|\s)(ohne\s+(einwilligung|zustimmung|einverständnis|annahme)|(weiter|fortfahren)\s+ohne)/is,

    // negations / refusals not covered by the regexes above
    'nein, danke',
    'nein, bitte nicht',
    'nein, ich stimme nicht zu',
    'nicht zustimmen',
    'nicht einverstanden',
    'ich lehne ab',
    'widerrufen',
    'mit erforderlichen einstellungen fortfahren',
    'mit erforderlichen cookies fortfahren',
    'mit notwendigen fortfahren',
];

const REJECT_PATTERNS_ITALIAN = [
    // rifiuta / rifiutare / rifiuto / nega / negare / blocca (reject verbs)
    /(^|\s)(rifiut|neg(a|are|hi)|blocca i cookie)/is,

    // accept/use only necessary / essential / technical
    /^\s*(accetta|accettare|usa|installa|consenti|chiudi e prosegui( solo con)?)?\s*(solo|soltanto|unicamente)?\s*(i\s+|gli\s+)?(cookies?\s+)?(strettamente\s+)?(necessari|necessary|essenziali|tecnici|di navigazione)\s*(necessari|tecnici|essenziali)?\s*$/is,

    // continue without accepting
    /continua(re)? senza accettare/is,

    'non accetto',
];

const REJECT_PATTERNS_BRAZILIAN_PORTUGUESE = [
    // (deny)
    /^\s*(rejeitar|recusar|desativar|bloquear|negar|não\s*aceito|não \s*aceitar)\s*$/is,

    // (proceed) (without accepting)
    /^\s*(continuar|prosseguir|seguir)\s*(sem\s*aceitar)\s*$/is,

    // (deny) (everything) (optional)
    /^\s*(rejeitar|recusar|desativar|bloquear|negar|não\s*aceito|não \s*aceitar)\s*(tudo|o)?\s*(opcional|(não[-\s](essencial|funcional|obrigatório|necessário)))?\s*$/is,

    // (deny) (all) (the) (optional) (cookies)
    /^\s*(rejeitar|recusar|desativar|bloquear|negar|não\s*aceito|não \s*aceitar)\s*(todos)?\s*(os)?\s*(cookies)?\s*(opcionais|(não[-\s](essenciais|funcionais|obrigatórios|necessários)))?\s*$/is,

    // (accept) (only) (the) (essential)
    /^\s*(aceitar|utilizar)?\s*(apenas|somente|só)?\s*(o)?\s*(essencial|funcional|obrigatório|necessário)\s*$/is,

    // (accept) (only) (the) (essential) (cookies)
    /^\s*(aceitar|utilizar)?\s*(apenas|somente|só)?\s*(os)?\s*(cookies)?\s*(essenciais|funcionais|obrigatórios|necessários)\s*$/is,
];

const REJECT_PATTERNS_SPANISH = [
    // rechazar / denegar / declinar / negar (reject verbs, any position)
    // "rechazar y pagar" / "rechazar y suscribirse" are excluded via NEVER_MATCH_PATTERNS
    /(^|\s)(rechaz|recház|deneg|negar|declin)/is,

    // accept/allow/use (only) necessary / essential / technical / functional / own
    /^\s*(aceptar?|acepta|permitir|permite|usar|utilizar)?\s*(solo|sólo|només|únicamente)?\s*(las?\s+|los\s+)?(cookies?\s+)?(estrictamente\s+)?(necesari\w*|esencial\w*|técnic\w*|obligatori\w*|funcional\w*|propias)\s*$/is,

    // "solo/sólo/no, sólo ... necessary/essential"
    /^(no,?\s+)?(solo|sólo|només)\s+(usar\s+|las?\s+|los\s+|lo\s+)?.{0,20}(necesari|esencial|estrictamente)/is,

    // refusals / opt-outs
    /^(no acept|no consentir|no permitir|no estoy de acuerdo|no,? gracias|sin consentimiento|revocar consentimiento|continuar sin aceptar|prefiero rechazarlas|descartar todas)/is,

    'acceptar només les necessàries',
    'només sutilitzen cookies quan és necessari',
    'pulsa aquí para desactivar las cookies opcionales',
];

const REJECT_PATTERNS_SWEDISH = [
    // avvisa / avböj / neka / förneka (reject verbs)
    /(^|\s)(avvisa|avböj|neka|nekar|förneka)/is,

    // (allow/accept/use) only necessary cookies/kakor
    /(bara|endast|enbart)\s+nödvändig/is,

    // "godkänn/acceptera/använd/tillåt (bara/endast/enbart) nödvändiga (cookies/kakor)"
    /^(ok,?\s+|nej,?\s+)?(jag\s+)?(godkänn\w*|godta|acceptera\w*|använd\w*|tillåt|spara)?\s*(bara|endast|enbart)?\s*(strikt\s+)?nödvändiga?t?( (cookies|kakor|tjänster))?\.?$/is,

    // continue without accepting
    /fortsätt utan att (acceptera|godkänna)/is,

    /strikt nödvändig/is,

    'tillåt inte cookies',
    'jag accepterar endast grundläggande kakor',
];

const REJECT_PATTERNS_CATALAN = [/(^|\s)rebutj/is, 'no accepto', 'no, gràcies'];

const REJECT_PATTERNS_GALICIAN = [/(^|\s)rexeitar/is];

const REJECT_PATTERNS_BASQUE = [/(^|\s)(baztertu|ukatu)/is];

const REJECT_PATTERNS_PORTUGUESE = [/^aceitar apenas cookies essenciais\.$/];

const REJECT_PATTERNS_CZECH = ['povolit pouze nezbytné cookie'];

const REJECT_PATTERNS_POLISH = [
    // odrzuć / odrzucam / odmawiam / rezygnuję / blokuj wszystkie (reject verbs)
    /odrzu(ć|cam|cenie|cać|canie|cić)|odmaw|odmowa|odmów|rezygnuj|blokuj wszystk/is,

    // (accept) only necessary / required
    /(^|\s)tylko\s+(bezwzględnie\s+)?(niezbędn\w*|wymagan\w*|konieczne)/is,
    /(akceptuj|akceptuję|zaakceptuj|zatwierdź|potwierdzam|zezwól)\s+(tylko\s+)?(na\s+)?(niezbędn\w*|wymagan\w*|konieczne)/is,
    /korzystaj wyłącznie z niezbędn/is,

    // continue without accepting / consent
    /kontynuuj bez (akceptacj|akceptowani|wyrażania zgody)/is,

    // refusals
    /nie (akceptuję|zgadzam|wyrażam zgody|wyrażaj zgody|zezwalaj|potwierdzam)/is,
    /^nie(,?\s+(dziękuję|nie zgadzam.*))?$/is,

    'niezbędne',
    'niezbędne pliki cookie',
    /^funkcjonalne pliki cookie \(wymagane\)$/,
];

const REJECT_PATTERNS_RUSSIAN = ['принимать только необходимые файлы cookie'];

const REJECT_PATTERNS_TURKISH = ['reddet', 'çerezleri reddet'];

const REJECT_PATTERNS_INDONESIAN = ['tolak cookie'];

/**
 * @type {Array<string|RegExp>}
 */
export const REJECT_PATTERNS = [
    ...REJECT_PATTERNS_ENGLISH,
    ...REJECT_PATTERNS_DUTCH,
    ...REJECT_PATTERNS_FRENCH,
    ...REJECT_PATTERNS_GERMAN,
    ...REJECT_PATTERNS_ITALIAN,
    ...REJECT_PATTERNS_BRAZILIAN_PORTUGUESE,
    ...REJECT_PATTERNS_SPANISH,
    ...REJECT_PATTERNS_SWEDISH,
    ...REJECT_PATTERNS_CATALAN,
    ...REJECT_PATTERNS_GALICIAN,
    ...REJECT_PATTERNS_BASQUE,
    ...REJECT_PATTERNS_PORTUGUESE,
    ...REJECT_PATTERNS_CZECH,
    ...REJECT_PATTERNS_POLISH,
    ...REJECT_PATTERNS_RUSSIAN,
    ...REJECT_PATTERNS_TURKISH,
    ...REJECT_PATTERNS_INDONESIAN,
];

export const NEVER_MATCH_PATTERNS = [
    /pay|subscribe/is,
    /abonneer/is,
    /abonnier/is,
    /abonner/is,
    /abbonati/is,
    /iscriviti/is,
    /abbonare/is,
    /iscrivere/is,
    /sostienici/is,
    /suscribir/is,

    // Spanish (ES)
    /^abandonar este sitio$/,
    /suscribo/,
    /^accede gratis con cookies publicitarias$/,
    /pagar/,
    /suscríbete/,
    /sin cookies .{0,10}euro/s,

    // Polish (PL)
    /subskrybuj/,
];

// Popup-text patterns that exclude a popup from heuristic handling, even if it
// matches a cookie pattern and exposes a reject-style button. Targets age gates
// and adult-content disclaimers whose "reject" button leads to a dead end
// (e.g. doublelist.com's age-verification modal).
export const POPUP_EXCLUDE_PATTERNS = [
    // "Age verification", "age confirmation", "age check", "age gate", "age restriction"
    /age\s+(?:verification|confirmation|check|gate|restriction)/i,

    // "over 18 years", "above 18 years", "at least 18 years", "older than 21", "18+"
    /(?:over|above|at\s*least|minimum|older\s+than)\s*(?:18|21)\s*(?:years|yo|y\.?o\.?|\+)?/i,

    // "18 years of age", "18+ years old", "21 years or older"
    /(?:18|21)\s*(?:\+|years?)\s*(?:of\s*age|or\s*older|or\s*above)/i,

    // "I am 18+", "I am over 18", "I'm 21 or older"
    /(?:i'?m|i\s*am)\s*(?:over|above|at\s*least)?\s*(?:18|21)(?:\+|\s*(?:or\s*older|years))?/i,

    // "you must be 18", "users must be at least 21", "visitors must be over 18"
    /(?:you|users?|visitors?)\s+must\s+be\s+(?:over|above|at\s*least)?\s*(?:18|21)/i,

    // "adult oriented material", "adult content", "adult-only website"
    /adult[\s-]+(?:oriented|only|content|material|websites?)/i,
];

export const SETTINGS_PATTERNS = [
    // Multilingual "open customization" patterns: a customization verb next to a
    // cookie/preference/settings/options/details/purposes noun (both word orders).
    // The negative lookahead avoids policy links and save/confirm/accept phrases (those are accept/acknowledge/other).
    /^(?!.*\b(policy|policies|notice|statement|impressum|richtlinie|beleid|politique|política|polityk|speichern|guardar|opslaan|zapisz|enregistrer|sauvegarder|bevestig|bestätig|confirm|save|submit|akzeptier|accept|zaakcept)\b)(customi[sz]e|manage|adjust|configure|personali[sz]e|let me choose|edit|change|set|select|view|see|review|update|open|show|choose|anpassen|verwalten|konfigurieren|bearbeiten|öffnen|anzeigen|einblenden|festlegen|auswählen|wählen|aanpassen|beheren|instellen|wijzig\w*|personaliseren|personaliseer|kies|bekijk|toon|personnaliser|paramétrer|gérer|configurer|choisir|afficher|définir|modifier|configurar|personalizar|gestionar|administrar|ajustar|seleccionar|modificar|establecer|dostosuj|zarządzaj|personalizuj|ustaw\w*|zmień|pokaż|wybierz)\b.{0,20}(cookies?|preferences?|settings?|options?|choices?|controls?|details?|purposes?|services?|consent|einstellung\w*|optionen|präferenzen|einzelheiten|zwecke|dienste|datenschutz\w*|auswahl|voorkeur\w*|instelling\w*|opties|diensten|préférences|paramètres|réglages|choix|détails|finalités|témoins|preferencia\w*|opciones|ajustes|configuraci\w*|detalles|servicios|elección|preferencj\w*|ustawie\w*|opcje|szczegół\w*|cele|galetes)\b/is,
    /^(?!.*\b(policy|policies|notice|statement|impressum|richtlinie|beleid|politique|política|polityk|speichern|guardar|opslaan|zapisz|enregistrer|sauvegarder|bevestig|bestätig|confirm|save|submit|akzeptier|accept|zaakcept)\b)(cookies?|preferences?|settings?|options?|choices?|controls?|details?|purposes?|services?|consent|einstellung\w*|optionen|präferenzen|einzelheiten|zwecke|dienste|datenschutz\w*|auswahl|voorkeur\w*|instelling\w*|opties|diensten|préférences|paramètres|réglages|choix|détails|finalités|témoins|preferencia\w*|opciones|ajustes|configuraci\w*|detalles|servicios|elección|preferencj\w*|ustawie\w*|opcje|szczegół\w*|cele|galetes)\b.{0,15}(customi[sz]e|manage|adjust|configure|personali[sz]e|let me choose|edit|change|set|select|view|see|review|update|open|show|choose|anpassen|verwalten|konfigurieren|bearbeiten|öffnen|anzeigen|einblenden|festlegen|auswählen|wählen|aanpassen|beheren|instellen|wijzig\w*|personaliseren|personaliseer|kies|bekijk|toon|personnaliser|paramétrer|gérer|configurer|choisir|afficher|définir|modifier|configurar|personalizar|gestionar|administrar|ajustar|seleccionar|modificar|establecer|dostosuj|zarządzaj|personalizuj|ustaw\w*|zmień|pokaż|wybierz)\b/is,

    'settings',
    'preferences',
    /customi(s|z)e/is,
    'more options',
    /(manage|configure) (my|your) (preferences|choices|cookies)/is,
    /(cookie )?preference center/is,
    'configure',
    'cookie manager',
    'cookie preference',
    'let me choose',
    'cookieconsent preferences',
    /privacy choices/is,
    /^(privacy|cookie|custom) settings$/is,
    /^cookies? (settings|preferences|setting)$/is,
    /(manage|customize|customise|opt-out|edit).*(cookies|preferences|settings|options)/is,
    'cookie consent options',
    'privacy controls',
    // German
    'einstellungen',

    // Spanish (ES)
    /^(configurar|configuración|administrar)$/,
    /^(gestionar|ver|establecer) preferencias$/,
    'ajustes',
    'centro de preferencias',
    'configura',
    /^configuración( de( las)?)? cookies?( y servicios)?$/,
    /^configurar\.\.\.$/,
    'configurarlas',
    'detalles',
    'gestiona tus preferencias',
    /^gestionar ?(las?|mis)? ?(configuración|preferencias)?(( de)? cookies?)?$/,
    'gestión cookies',
    'gestión de cookies',
    'mis preferencias',
    'mostrar detalles',
    'mostrar los propósitos',
    'más opciones',
    'no, ajustar',
    'obtener más información y configuración',
    'opciones de gestión',
    'panel de configuración de cookies',
    'personalice',
    'personalizar',
    'preferencias de privacidad',
    'preferencias',
    'quiero configurarlas',
    'saber más y personalizar',
    'seleccionar fines individuales',

    // Catalan (CA)
    'configura-les',
    'personalitza',
    'veure preferències',

    // Galician (GL)
    'xestionar preferencias',

    // Basque (EU)
    /^(konfigurazioa|konfiguratu)$/,

    // Portuguese (PT)
    'gerenciar cookies',

    // French (FR)
    'paramétrage des cookies',
    'paramétrer',
    'personnaliser',
    'paramètres',
    'préférences',
    'réglages',
    'détails',
    'gestion des cookies',
    /^gérer (les |mes )?cookies$/,
    'je choisis',
    'voir les préférences',

    // German (DE)
    'abschnitt einzelheiten',
    'cookie-details',
    /^datenschutz-?einstellungen$/,
    'cookie-einstellungen',
    /^einstell(ungen|en) oder ablehnen$/,
    'auswählen',
    /^einstellungen (anpassen|ansehen|verwalten|ändern)$/,
    'erweiterte einstellungen',
    'individuelle datenschutz-präferenzen',
    'individuelle datenschutzeinstellungen',
    'konfigurieren',
    'mehr optionen',
    'präferenzen',
    'individuelle einstellungen',
    'privatsphäre einstellungen',

    // Dutch (NL)
    /^(aan|an)passen$/,
    /^cookie[- ]instellingen$/,
    'cookiestatement instellingen',
    /^details (tonen|weergeven)$/,
    'instellingen',
    'meer opties',
    'zelf instellen',

    // Czech (CS)
    'podrobné nastavení',

    // Polish (PL)
    // examples:
    //  dostosuj pliki cookie (adjust cookies)
    //  zarządzaj plikami cookie (manage cookies)
    /^(dostosuj|s?personalizuj|chcę dostosować|zarządzaj) ?(moje|moimi)? ?(ustawieniami|preferencjami)? ?(zgody|wybory|(plik(i|ami|ów))? cookies?)?$/,
    /^(preferencje|zarządzaj preferencjami)$/,
    /^(ustawienia|zmień ustawienia|zmiana ustawień|zarządzaj opcjami)$/,
    'centrum preferencji',
    /^chcę dokonać ustawień cookies\.$/,
    'dostosuj wybór',
    'edytuj ustawienia',
    'konfiguracja zgód',
    'otwórz ustawienia',
    'personalizacja',
    'pokaż cele',
    'pokaż szczegóły',
    'szczegóły',
    'pozwól mi wybrać',
    /^przejdź do ustawień plików cookies\.$/,
    'przejdź do ustawień prywatności',
    'przejdź do ustawień',
    'skonfiguruj',
    'ustaw swoje wybory',
    'ustawienia ciasteczek',
    'ustawienia prywatności',
    'ustawienia zaawansowane',
    'ustawienia zgody',
    /^ustawienia(ch)?( plików)? cookies?$/,
    'ustawieniach',
    'ustawień zaawansowanych',
    'więcej opcji',
    'więcej ustawień',
    /^wybierz, jakie pliki cookies chcesz zaakceptować\.$/,
    'zaawansowane',
    'zarządzaj zgodami dotyczącymi plików cookies',
    'zarządzaj zgodami',
    'zarządzania zgodami',
    'zarządzanie opcjami',
    'zarządzanie preferencjami',
    'zarządzanie ustawieniami plików cookie',
    'zmieniam ustawienia',
    'zmieniam zgody',
    'zmień swoje preferencje',
    /^zmień ustawienia( plików)? cookies?$/,
    'zmień zgody',
    'zobacz preferencje',

    // Russian (RU)
    'настроить файлы cookie',
    'настройки',

    // Italian (IT)
    'personalizza cookie',

    // English (EN)
    'advanced settings',
    'consent settings',
    /^details (anzeigen|zeigen|section)$/,
    'no, adjust',
    'personalize',
    'plus doptions',
    'privacy manager',
];

export const ACCEPT_PATTERNS = [
    // EN accept/agree/allow/consent/enable (+ all/cookies/selection/continue/close/proceed...).
    // The negative lookahead avoids essential-only/reject wording (those are reject).
    /^(?!.*\b(essential|necessary|required|functional|minimal|reject|deny|refuse|decline|only|dismiss)\b)(?!.*all cookies continue)(yes,?\s+)?(i\s+)?(accept|agree|allow|consent|enable)(\s+(to\s+)?(all( cookies)?|cookies|selection|selected( cookies)?|everything|recommended( cookies| settings)?|optional( cookies)?|additional cookies|analytics cookies))?(\s+(and\s+)?(continue|close|proceed|save))?\s*$/is,
    /^continue (and accept|using cookies|with (all|recommended cookies|cookies))$/is,

    // DE accept verbs
    /^(alle[sn]?\s+|allem\s+|ich\s+|cookies\s+|ausgewählte\s+|webanalyse\s+)?(cookies?\s+)?(akzeptieren|annehmen|zustimmen|zulassen|erlauben|einwilligen|aktivieren|auswählen)(\s+(und\s+)?(weiter|schließen))?\s*$/is,
    /^((meine\s+)?auswahl|alle)\s+(bestätigen|akzeptieren|auswählen)$/is,
    /^(alle[nm]?\s+)?(zustimmen|einverstanden|einwilligung|zustimmung)$/is,
    /^ich (bin einverstanden|akzeptiere( alle)?|stimme zu)$/is,

    // NL accept verbs
    /^(ja,?\s+)?(alle[s]?\s+|ik\s+)?(cookies?\s+)?(accepteer|accepteren|toestaan|aanvaard|aanvaarden|ga akkoord|akkoord)(\s+(en\s+(sluiten|doorgaan|verdergaan)|cookies|alle))?\s*$/is,
    /^(selectie (accepteren|toestaan)|accepteer (selectie|alle)|alle (toestaan|accepteren|aanvaarden)|ja, (dat is prima|prima|alles toestaan|accepteren|ik accepteer cookies|ik ga akkoord)|is goed)$/is,

    // FR accept verbs
    /^(oui,?\s+)?(je\s+)?(tout\s+)?(accepter|jaccepte|autoriser)(\s+(tout|tous les (cookies|témoins)|les (cookies|témoins)|la sélection|et (continuer|fermer|poursuivre)))?\s*$/is,
    /^(oui, (jaccepte|je suis daccord)|jaccepte (les cookies|lutilisation de cookies)|accepter (continuer|et poursuivre)|continuer et accepter|fermer et accepter)$/is,

    // ES/CA accept verbs
    /^(sí,?\s+|si,?\s+)?(aceptar|acepta|permitir|permitirlas|consentir|estoy de acuerdo|de acuerdo|estic dacord)(\s+(todo|todas( las cookies)?|cookies|la selección|selección|y (cerrar|continuar|seguir( leyendo)?|leer gratis)))?\s*$/is,

    // save / submit selection / preferences (accept semantics; acknowledge catches "guardar configuración/selección" first)
    /^(save|store|submit|guardar|sauvegarder|zapisz|opslaan|bewaar)\b.{0,25}(preference|setting|selection|choice|mes choix|cookie|voorkeur|keuze|ustawien|zgod)/is,
    /^((meine\s+)?auswahl|einstellungen|einwilligung|voorkeuren|instellingen|selectie|keuzes)\s+(speichern|opslaan)$/is,

    /i (accept|allow)( all)?/is,
    'yes',
    /accept all above/is,
    'close and accept',
    /accept all$/is,
    'im ok with that',

    // Spanish (ES)
    /^acept(ar|o)( cookies)?$/,
    /^acept(o|ar) todas las cookies$/,
    'aceptar cookies opcionales',
    'aceptar gratis',
    'aceptar las cookies',
    'aceptar todas cookies',
    'aceptar todas y cerrar',
    'aceptar todas y continuar',
    'aceptar todo y cerrar',
    /^aceptar y (continuar|seguir|navegar)( gratis)?$/,
    'aceptar y seguir navegando',
    'aceptarlas todas',
    'guardar preferencias',
    'ok, las acepto',
    /^s[íi], acepto todas las cookies$/,
    /^s[íi], acepto$/,
    /^s[íi], estoy de acuerdo$/,
    'x aceptar y cerrar',

    // Catalan (CA)
    /^accept(ar|o)( cookies)?$/,
    'accepta',
    'accepta totes les cookies',
    'accepta-ho tot',
    'accepta-les totes',
    'acceptar galetes',
    'acceptar i tancar',
    'acceptar tot',
    'acepta-les totes',
    'permet-les totes',
    'permetre totes les cookies',
    'permetre la selecció',

    // Basque (EU)
    /^denak? onartu$/,
    /^onartu \(cookie\)$/,
    'onartu cookieak',
    'onartu',

    // Portuguese (PT)
    'aceitar cookies',
    'aceitar',
    'de acordo',

    // French (FR)
    /^accepter (tout|tous les cookies|fermer)$/,

    // German (DE)
    /^(alles akzeptieren|alle zulassen|auswahl erlauben|cookies zulassen|einverstanden|einwilligung|zustimmen|zustimmung)$/,

    // Dutch (NL)
    /^(accepteer (alles|alle cookies)|alles (accepteren|toestaan)|alle cookies (accepteren|toestaan))$/,

    // Czech (CS)
    'souhlasím',

    // Polish (PL)
    // examples:
    //  akceptuj cookies (Accept cookies)
    //  akceptuj wszystkie pliki cookie (Accept all cookies)
    /^(zaakceptuj|akceptuj[eę]|akceptuj) ?(wszystkie|wszystko)?( pliki)? ?(zgody|ciasteczka|cookies?)?$/,
    'akceptowanie plików cookie',
    'akceptuj wybrane',
    'akceptuj i zamknij',
    'akceptuj wszystkie i przejdź do serwisu',
    'akceptuję i przechodzę do serwisu',
    'akceptuję politykę plików cookies i przechodzę do strony',
    'akceptuję ustawienia cookies',
    'akceptuję wszystkie i korzystam z usług',
    'akceptuję!',
    'ok, zgadzam się',
    'potwierdzam wszystkie',
    'przejdź do serwisu',
    'tak',
    'tak, zgadzam się na wszystkie pliki cookie',
    'tak, zgadzam się',
    'wyraź zgodę na wszystko',
    'wyrażam zgodę na wszystkie',
    'wyrażam zgodę',
    'włącz wszystkie ciasteczka',
    'zaakceptuj i kontynuuj',
    'zaakceptuj i zamknij',
    'zaakceptuj wszystkie i przejdź do serwisu',
    'zaakceptuj wszystkie zgody i wejdź do serwisu',
    'zaakceptuj wszystkie zgody i zapisz',
    'zatwierdź',
    'zezwolenie na wszystkie',
    'zezwól na wszystkie ciasteczka',
    'zezwól na wszystkie cookies',
    'zezwól na wszystkie pliki cookies',
    'zezwól na wszystkie',
    'zezwól na wybór',
    'zezwól',
    'zgadzam się na wszystkie',
    'zgadzam się',
    'zgoda na wszystkie',
    'zgoda',
    'zaakceptuj wybrane',
    'zezwól na wybrane',
    'zgoda na wybrane',

    // Russian (RU)
    'принять все файлы cookie',
    'принять',

    // Turkish (TR)
    'kabul et',

    // Italian (IT)
    'accetta',
    'accetta tutti i cookie',
];

export const ACKNOWLEDGE_PATTERNS = [
    // close / dismiss the banner/dialog/message (multilingual). The negative lookahead avoids
    // accept/save phrases (e.g. "agree and close", "akkoord en sluiten", "speichern schließen").
    /^(?!.*\b(accept\w*|accepter|accepteer|accepteren|agree|allow|akkoord|aanvaard\w*|zustimm\w*|annehm\w*|akzeptier\w*|aceptar|acepta|permit\w*|consent\w*|einverstanden|zezw\w*|zgadzam|zgoda|guardar|opslaan|enregistrer|speicher\w*|zapisz)\b)(x\s+|nee,?\s+)?(close|dismiss|schlie(ß|ss)en|sluiten|afsluiten|fermer|cerrar|tanca|beenden|masquer|zamknij)( (this|the|ce|le|el|de|des|het|la|een)?\s*(banner|bandeau|banier|bar|dialog|dialogue|window|okno|melding|message|notification|informa\w*|notificaci\w*|cookie\w*|bannière|rgpd|gdpr|hier|des cookies|de cookies|x))*\.?\s*$/is,

    // "ok" / "okay" / "oké" (optionally followed by a short acknowledgement)
    /^(ok|okay|oké|okey|k)([ .!,]*)(got it|verstanden|compris|rozumiem|thanks|gracias|ik begrijp( dat| het)?|continue to website|pour moi|fermer)?[ .!]*$/is,

    // "understood" / "got it" / "that's ok" (multilingual)
    /^(i understand|understood|got it|thats (ok|fine|okay)|alright|alles klar|in ordnung|verstanden|begrepen|jai compris|je comprends|compris|ik begrijp het|ik snap het|entendido|c(e)?st ok pour moi)[ !.,]*(merci|bedankt|dismiss this banner)?[ !.]*$/is,

    // confirm
    /^(confirm|bestätigen|bevestigen|confirmar|potwierdź)[ !.]*$/is,

    // neutral "continue" without accept/reject wording
    /^(continuer|doorgaan|ga verder)$/is,

    'continue',
    'x',
    /^got it!?$/,
    'acknowledge',
    /^close (banner|cookie notification)$/is,
    /understood$/is,
    'confirm my choices',

    // French (FR)
    'accepter fermer',

    // German (DE)
    'akzeptieren schließen',
    'speichern schließen',

    // Spanish (ES)
    /^.?( lo)?(entendido|entiendo).?$/s,
    'aceptar seleccionadas',
    'continuar',
    'guardar configuración',
    'guardar selección',
    'guardar y cerrar',
    'ir al contenido principal',
    'seguir',
    'vale',
    '¡vamos!',

    // Catalan (CA)
    'dacord',

    // Polish (PL)
    'kontynuuj',
    'ok, zrozumiałem',
    /^ok.? rozumiem.?$/s,

    'rozumiem!',
    'rozumiem',
    'rozumiem, nie pokazuj więcej',
    'w porządku!',
    'w porządku',
    /^zamknij informację o( plikach)? cookies$/,
    'zapisz i zamknij',

    // Russian (RU)
    'понятно',
];

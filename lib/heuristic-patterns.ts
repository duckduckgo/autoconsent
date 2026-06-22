// TODO: check for false positive detections per pattern
// these patterns are matched against popup-like elements or full document text to detect unknown cookie popups
export const DETECT_PATTERNS = [
    /accept cookies/gi,
    /accept all/gi,
    /reject all/gi,
    /only necessary cookies/gi, // "only necessary" is probably too broad
    /(?:by continuing.{0,100}cookie)|(?:cookie.{0,100}by continuing)/gi,
    /(?:by continuing.{0,100}privacy)|(?:privacy.{0,100}by continuing)/gi,
    /by clicking.{0,100}(?:accept|agree|allow)/gi,
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
    /nous.{0,100}utilisons.{0,100}des/gi,
    /des.{0,100}cookies.{0,100}pour/gi,
    /des.{0,100}informations.{0,100}sur/gi,
    /retirer.{0,100}votre.{0,100}consentement/gi,
    /accéder.{0,100}à.{0,100}des/gi,
    /à.{0,100}des.{0,100}informations/gi,
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
    // we use cookies
    /(usamos|utilizar?|utilizamos|utilizamos|usiamo)( (tanto|las))? .?cookies?\b/gi,
    // we use cookies
    /utilitzem galetes/gi,
    // own and third-party cookies
    /cookies propias y de/gi,
    // we and our partners/providers ... cookies
    /nosotros y nuestros( \d+)? (socios|proveedores).{0,180} cookies/gi,
    // We use third-party services
    /utilizamos servicios de terceros/i,
    // This store asks you to accept cookies
    /esta tienda te pide que aceptes cookies/i,
    // Cookies are used to provide you with a better experience on our website
    /las cookies se utilizan para brindarle una mejor experiencia en nuestro sitio web/i,
    // Use of cookies
    /uso de cookies/i,
    // store information on a device and/or access it
    /almacenar la información en un dispositivo y\/?o acceder a ella/i,
    // About cookies on this site
    /acerca de las cookies en este sitio/i,
    // Our website and partner companies use cookies
    /nuestro[s]? sitio web y las empresas asociadas utilizan cookies/i,
    // This website uses/serves cookies
    /est[ea] (sitio|página|web)( web)?( también)? (usa|utiliza|requiere del uso de|se sirven|emplea) cookies?/i,
    // technical cookies are necessary for our website to work
    /cookies técnicas son necesarias para que nuestra página web pueda funcionar/i,
    // authorize ... and its partners to use trackers
    /autoriza a .{0,100} a usar rastreadores/i,
    // processes information about your visit using cookies
    /procesa información sobre su visita utilizando cookies/i,
    // own and third-party cookies (Catalan)
    /cookies pròpies i de tercers/gi,
    // information about the cookies used
    /información acerca de las cookies utilizadas/gi,
    // we collect and store data from you and your device
    /recopilamos y almacenamos datos de usted y de su dispositivo/gi,
    // we use technologies such as cookies
    /utilizamos tecnolog[ií]as como las cookies/i,
    // uses Google cookies
    /\busa cookies de google\b/i,
];

const REJECT_PATTERNS_ENGLISH = [
    // e.g. "i reject cookies", "reject all", "reject all cookies", "reject cookies", "deny all", "deny all cookies", "refuse", "refuse all", "refuse cookies", "refuse all cookies", "deny", "reject all and close", "deny all and close", "reject non-essential cookies", "reject all non-essential cookies and continue", "reject optional cookies", "reject additional cookies", "reject targeting cookies", "reject marketing cookies", "reject analytics cookies", "reject tracking cookies", "reject advertising cookies", "reject all and close", "deny all and close", "i reject all (except strictly necessary)"
    // note that "reject and subscribe" and "reject and pay" are excluded
    /^\s*(i)?\s*(reject|deny|refuse|decline|disable)\s*(all)?\s*(non-essential|optional|additional|targeting|analytics|marketing|unrequired|non-necessary|extra|tracking|advertising)?\s*(cookies)?\s*(\(?\s*except\s+(strictly\s+)?(necessary|essential)\s*\)?)?\s*$/is,

    // e.g. "i do not accept", "i do not accept cookies", "do not accept", "do not accept cookies"
    /^\s*(i)?\s*do\s+not\s+accept\s*(cookies)?\s*$/is,

    // e.g. "continue without accepting", "continue without agreeing", "continue without agreeing →"
    /^\s*(continue|proceed|continue\s+browsing)\s+without\s+(accepting|agreeing|consent|cookies|tracking)(\s*→)?\s*$/is,

    // e.g. "strictly necessary cookies only", "essential cookies only", "required only", "use necessary cookies only", "essentials only"
    // note that "only" is required
    /^\s*(use|accept|allow|continue\s+with)?\s*(strictly)?\s*(necessary|essentials?|required)?\s*(cookies)?\s*only\s*$/is,

    // e.g. "allow essential cookies", "allow necessary", "allow essentials", "allow essentials only"
    // note that "essential" is required
    /^\s*(use|accept|allow|continue\s+with)?\s*(strictly)?\s*(necessary|essentials?|required)\s*(cookies)?\s*$/is,

    // e.g. "accept only essential cookies", "use only necessary cookies", "allow only essential", "only essentials", "continue with only essential cookies"
    // note that "only" is required
    /^\s*(use|accept|allow|continue\s+with)?\s*only\s*(strictly)?\s*(necessary|essentials?|required)?\s*(cookies)?\s*$/is,

    // e.g. "do not sell or share my personal information", "do not sell my personal information"
    // often used in CCPA
    /^\s*do\s+not\s+sell(\s+or\s+share)?\s*my\s*personal\s*info(rmation)?\s*$/is,

    'allow selection',
    'disagree and close',

    // These are impactful, but look error-prone
    // // e.g. "disagree"
    /^(i)?\s*disagree\s*(and\s+close)?$/i,
    // // e.g. "i do not agree"
    // /^\s*(i\s+)?do\s+not\s+agree\s*$/i,
    'no',
    /^no,? thanks$/is,
    /^opt[ -]out$/is,
];

const REJECT_PATTERNS_DUTCH = [
    'weigeren',
    'alles afwijzen',
    'alleen noodzakelijke cookies',
    'afwijzen',
    'alles weigeren',
    'cookies weigeren',
    'alleen noodzakelijk',
    'weiger',
    'weiger cookies',
    'selectie toestaan',
    'doorgaan zonder te accepteren',
    'alleen functionele cookies',
    'alleen functioneel',
    'alleen noodzakelijke',
    'alleen essentiële cookies',
    'functioneel',
    'alle cookies verwerpen',
    'doorgaan zonder akkoord te gaan',
    'weiger alles',
    'nee, bedankt',
    'alle cookies weigeren',
    'weiger alle cookies',
    'alleen noodzakelijke cookies accepteren',
    'alleen strikt noodzakelijk',
    'ik weiger',
    'optionele cookies weigeren',
    'alle weigeren',
    'accepteer alleen noodzakelijke cookies',
    'alleen functionele cookies accepteren',
    'enkel noodzakelijke cookies',
    'niet accepteren',
    'weiger niet-essentiële cookies',
    'weiger niet-noodzakelijke cookies',
    'wijs alles af',
    'alle cookies afwijzen',
    'alleen vereiste cookies',
    'cookies afwijzen',
    'doorgaan zonder accepteren',
    'hier weigeren',
    'weiger alle',
    'aanvaard enkel essentiële cookies',
    'aanvullende cookies weigeren',
    'accepteren weigeren',
    'alle afwijzen',
    'alle niet functionele afwijzen',
    'alle optionele weigeren',
    'alleen noodzakelijke accepteren',
    'alleen strikt noodzakelijke cookies',
    'allen afwijzen',
    'clear weigeren',
    'enkel functioneel',
    'enkel noodzakelijke cookies aanvaarden',
    'functioneel altijd actief',
    'nee, accepteer alleen de noodzakelijke',
    'nee, geen cookies a.u.b.',
    'nee, weiger cookies',
    'nee, weigeren',
    'niet-noodzakelijke cookies weigeren',
    'optioneel afwijzen',
    'tracking cookies weigeren',
    'weigeren cookies',
    'weigeren?',
    'weigeren.',
    'strikt noodzakelijk',
    'weiger optionele cookies',
    'noodzakelijke cookies',
    'essentiële cookies',
    'ga verder zonder aanvaarden',
    'doorgaan zonder cookies',
    'accepteer noodzakelijke cookies',
    'noodzakelijke',
    'indien je enkel technisch noodzakelijke cookies wenst te accepteren, klik dan hier',
    'weiger',
    'alleen de noodzakelijke cookies',
    'alleen noodzakelijk',
    'alleen verplichte cookies',
    'ik wil alleen minimale cookies',
    'doorgaan zonder te accepteren',
    'geen cookies toestaan',
    'liever geen cookies',
    'nee, geen persoonlijke cookies',
    'nee, liever geen cookies',
    'ga door zonder te accepteren',
    'verder zonder accepteren',
    'essentiële accepteren',
    'functionele cookies',
    'strikt noodzakelijke cookies',
    'alleen basic cookies',
    'alleen basiscookies',
    'alleen standaard cookies',
    'alle cookies verwerpen',
    'noodzakelijk',
    'noodzakelijk cookies accepteren',
    'noodzakelijke cookies accepteren',
    'accepteer alleen noodzakelijk',
    'enkel noodzakelijke toestaan',
    'enkel strikt noodzakelijke cookies',
    'ik wijs ze liever af',
    'ik weiger cookies',
    'ik weiger optionele cookies',
    'weiger alle cookies',
    'weiger alle niet-noodzakelijke cookies',
    'weiger alle onnodige cookies',
    'weiger alle optionele',
    'weiger alles',
    'weiger targeting en third party cookies.',
];

const REJECT_PATTERNS_FRENCH = [
    'continuer sans accepter',
    'tout refuser',
    'refuser',
    'refuser tous les cookies',
    'non merci',
    'interdire tous les cookies',
    'je refuse',
    'refuser tout',
    'tout rejeter',
    'refuser et continuer',
    'rejeter',
    'refuser les cookies',
    'cookies nécessaires uniquement',
    'seulement nécessaires',
    'rejeter tout',
    'refuser les cookies optionnels',
    'je désactive les finalités non essentielles',
    'refuser les cookies non nécessaires',
    'rejeter tous les cookies',
    'cookies essentiels uniquement',
    'nécessaires uniquement',
    'refuser les cookies non essentiels',
    'tout refuser et fermer',
    'tout refuser sauf les cookies techniques',
    'continuer sans accepter x',
    'je refuse lutilisation de cookies',
    'non merci, seulement des cookies techniques',
    'non, tout refuser',
    'refuser tous les cookies non nécessaires',
    'rejeter les cookies',
    'uniquement les essentiels',
    'refuser tous',
    'accepter uniquement les nécessaires',
    'allow anonymous analytics',
    'autoriser les cookies essentiels uniquement',
    'autoriser uniquement les nécessaires',
    'cookies essentiels seulement',
    'cookies nécessaires seulement',
    'cookies techniques uniquement',
    'je préfère les rejeter',
    'je refuse :(',
    'je refuse les cookies',
    'je refuse tous les cookies',
    'je refuse tout',
    'ne pas accepter',
    'non, accepter les nécessaires uniquement',
    'refuser (sauf cookies nécessaires)',
    'refuser ce cookie',
    'refuser les coockies',
    'refuser les cookies facultatifs',
    'refuser tout, sauf les cookies techniques',
    'refuser toutes',
    'refuser toutes les options',
    'rejeter la bannière',
    'rejeter les cookies non essentiels',
    'rejeter les cookies optionnels',
    'rejeter tous les non fonctionnels',
    'rejeter tout optionnel',
    'tout refuser, sauf les cookies techniques',
    'uniquement nécessaires',
    'x continuer sans accepter',
    'strictement nécessaires',
    'utiliser uniquement les cookies nécessaires',
    'cookies nécessaires',
    'accepter uniquement les cookies essentiels',
    'accepter les cookies nécessaires',
    'uniquement les cookies nécessaires',
    'autoriser uniquement les cookies essentiels',
    'autoriser uniquement les cookies nécessaires',
    'si vous ne souhaitez pas accepter les cookies à lexception des cookies techniquement nécessaires, veuillez cliquer ici',
    'cookies strictement nécessaires',
    'accepter les cookies strictement nécessaires',
    'autoriser les cookies essentiels',
    'non, merci, uniquement les cookies nécessaires',
    'indispensable uniquement',
    'uniquement autoriser les cookies essentiels',
    'utiliser que les cookies nécessaires',
    'uniquement les sdk nécessaires',
    'uniquement nécessaire',
    'utiliser uniquement les cookies fonctionnels',
    'refus',
    'refusez',
    'naccepter que les cookies indispensables',
    'naccepter que les cookies nécessaires',
    'naccepter que les cookies techniques',
    'nécessaires seulement',
];

const REJECT_PATTERNS_GERMAN = [
    'ablehnen',
    'alle ablehnen',
    'nur notwendige cookies',
    'nur essenzielle cookies akzeptieren',
    'nur notwendige cookies verwenden',
    'nur technisch notwendige',
    'nur essentielle cookies akzeptieren',
    'alles ablehnen',
    'nur notwendige',
    'alle cookies ablehnen',
    'weiter ohne einwilligung',
    'mit diesem button wird der dialog geschlossen. seine funktionalität ist identisch mit der des buttons nur essenzielle cookies akzeptieren.',
    'cookies ablehnen',
    'optionale cookies ablehnen',
    'nur erforderliche cookies',
    'einwilligung ablehnen',
    'nur erforderliche',
    'nur notwendige cookies zulassen',
    'nur funktionale cookies akzeptieren',
    'nur notwendige cookies akzeptieren',
    'nur notwendige technologien',
    'verweigern',
    'webanalyse ablehnen',
    'weiter ohne zustimmung',
    'optionale ablehnen',
    'nur notwendige akzeptieren',
    'nur funktionale cookies',
    'mit diesem button wird der dialog geschlossen. seine funktionalität ist identisch mit der des buttons ablehnen.',
    'nur notwendige cookies erlauben',
    'zustimmung verweigern',
    'nein, danke',
    'nur erforderliche cookies akzeptieren',
    'zusätzliche cookies ablehnen',
    'ablehnen und nur essenzielle cookies akzeptieren',
    'nicht erforderliche ablehnen',
    'nicht essenzielle cookies daten ablehnen',
    'nur technisch notwendige cookies',
    'nur technisch notwendige cookies akzeptieren',
    'ablehnen speichern',
    'alle funktionen ablehnen',
    'alle optionalen cookies ablehnen',
    'alles verweigern',
    'mit erforderlichen einstellungen fortfahren',
    'nicht notwendige ablehnen',
    'notwendige cookies akzeptieren',
    'nur erforderliche technologien',
    'nur essenzielle cookies',
    'nur essenzielle cookies erlauben',
    'technisch nicht notwendige cookies ablehnen',
    'tippen sie zum ablehnen bitte hier',
    'ablehnen deny',
    'fortfahren ohne zu akzeptieren',
    'nur erforderliche akzeptieren',
    'nur notwendige erlauben',
    'ablehnen ...nur technisch notwendige cookies verwendet werden',
    'ablehnen (außer notwendige cookies)',
    'ablehnen und fortfahren',
    'ablehnen und schließen',
    'ablehnen: nur grundfunktionen',
    'akzeptieren nur notwendige cookies',
    'alle ablehnen (außer notwendige cookies)',
    'alle nicht essenziellen cookies ablehnen',
    'alle nicht notwendigen cookies ablehnen',
    'alle optionale ablehnen',
    'alle optionalen ablehnen',
    'alle verweigern',
    'analyse cookies ablehnen',
    'cookie einstellungenablehnen',
    'erforderliche cookies akzeptieren',
    'erforderliche cookies zulassen',
    'externe inhalte ablehnen',
    'mit diesem button wird der dialog geschlossen. seine funktionalität ist identisch mit der des buttons ablehnen und nur essenzielle cookies akzeptieren.',
    'mit diesem button wird der dialog geschlossen. seine funktionalität ist identisch mit der des buttons nicht-essenzielle cookies verweigern.',
    'mit diesem button wird der dialog geschlossen. seine funktionalität ist identisch mit der des buttons nur essenzielle akzeptieren.',
    'mit erforderlichen cookies fortfahren',
    'mit notwendigen fortfahren',
    'nein, bitte nicht',
    'nein, ich stimme nicht zu',
    'nicht funktionale cookies ablehnen',
    'nicht notwendige cookies ablehnen',
    'nicht-essenzielle cookies ablehnen',
    'nicht-essenzielle cookies verweigern',
    'notwendige cookies zulassen',
    'nur erforderliche cookies erlauben',
    'nur erforderliche cookies setzen',
    'nur erforderliche cookies verwenden',
    'nur essenzielle akzeptieren',
    'nur notwendige cookies annehmen',
    'nur notwendige cookies speichern',
    'nur notwendige cookies verwenden.',
    'nur notwendige funktionscookies akzeptieren',
    'nur notwendigen cookies zustimmen',
    'nur notwendiges akzeptieren',
    'nur wesentliche cookies annehmen',
    'opt. cookies ablehnen',
    'optionale dienste ablehnen',
    'optionale tools ablehnen',
    'sie alle cookies ablehnen',
    'technisch notwendige annehmen',
    'nur essentielle cookies',
    'nur essentielle',
    'nur funktionale akzeptieren',
    'nur technisch notwendige akzeptieren',
    'nur technisch notwendige daten und cookies ...',
    'nur technisch notwendige zulassen',
    'nur wesentliche',
    'ohne einverständnis fortfahren',
    'ohne einwilligung',
    'ohne zustimmung fortfahren',
    'ohne zustimmung weiter',
    'weiter mit essentiellen cookies',
    'weiter ohne annahme',
    'weiter ohne statistische analyse-cookies',
    'weiter ohne statistische cookies',
    'wesentliche cookies',
    'fortfahren ohne zustimmung',
];

const REJECT_PATTERNS_ITALIAN = [
    'rifiuta',
    'rifiuta cookies',
    'rifiuta i cookie',
    'rifiuta i cookies',
    'rifiuta tutti i cookie',
    'rifiuta tutti i cookies',
    'rifiuta cookie non necessari',
    'rifiuta i cookie non tecnici',
    'rifiuta non necessari',
    'rifiuta tutto',
    'rifiuta tutti',
    'rifiuta e chiudi',
    'chiudi rifiuta tutti i cookie',
    'chiudi e rifiuta tutti i cookie',
    'chiudi e rifiuta tutto',
    'nega',
    'nega tutti',
    'negare',
    'non accetto',
    'accetta solo i necessari',
    'usa solo i cookie necessari',
    'accetta solo necessari',
    'solo necessari',
    'continua senza accettare x',
    'continua senza accettare',
    'rifiutare',
    'rifiutare i cookie',
    'rifiutare tutti i cookie',
    'rifiutare tutti',
    'rifiutare e continuare',
    'installa solo i cookie strettamente necessari',
    'solo cookies tecnici',
    'accetta necessari',
    'solo cookie tecnici',
    'solo cookie necessari',
    'strettamente necessari',
    'tecnici',
    'accetta solo cookie di navigazione',
    'chiudi e prosegui solo con i cookies tecnici necessari',
    'consenti solo i cookie tecnici',
    'solo cookie essenziali',
    'blocca i cookie non essenziali',
    'accetta i cookie necessari',
    'accetta solo cookie tecnici',
    'accetta solo i cookie essenziali',
    'accetta solo i cookie necessari',
    'accetta solo i necessary',
    'accetta i cookie essenziali',
    'accetta cookie tecnici',
    'necessari',
    'usa solo i cookie tecnici',
    'usa solo i necessari',
    'rifiuto',
    'essenziali',
    'accetta cookie essenziali',
    'accetta cookie necessari',
    'accetta solo cookie essenziali',
    'accetta solo cookie necessari',
    'rifiuta cookie non necessari',
    'rifiuta cookie non essenziali',
    'rifiuta i cookie non necessari',
    'rifiuta i cookie non essenziali',
    'rifiuta tutti i cookie e chiudi',
    'rifiuta tutto e chiudi',
    'rifiuta tutti i cookie chiudi',
    'continuare senza accettare',
    'rifiutare cookies',
    'rifiutare i cookies',
    'rifiutare non necessari',
    'rifiutare tutto',
    'rifiutare e chiudere',
    'solo essenziali',
    'solo tecnici',
    'negare tutti',
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
    'rechazar',
    'rechazar todo',
    'rechazar todas',
    'denegar',
    'rechazar cookies',
    'rechazarlas todas',
    'no acepto',
    'rechazar todas las cookies',
    'rechazar y cerrar',
    'denegar todas',
    'solo necesarias',
    'rechazar cookies opcionales',
    'rechazar opcionales',
    'cookies estrictamente necesarias',
    'aceptar sólo necesarias',
    'continuar sin aceptar',
    'denegar todo',
    'clear rechazar cookies',
    'configurar rechazar cookies',
    'denegar cookies',
    'rechazar y continuar',
    'rechazar las cookies',
    'clear rechazar',
    'denegar todas las cookies',
    'rechazar cookies no esenciales',
    'rechazarlas',
    'no, no acepto',
    'permitir sólo necesarias',
    'rechazar cookies adicionales',
    'rechazar cookies analíticas',
    'rechazar no necesarias',
    'rechazar opcional',
    'rechazar todo lo opcional',
    'solo cookies estrictamente necesarias',
    'solo esenciales',
    'x rechazar todas las cookies',
    'solo usar cookies necesarias',
    'solo cookies necesarias',
    'declinar',
    'aceptar solo las cookies esenciales',
    'necesarias',
    'aceptar cookies opcionales',
    'aceptar solo lo necesario',
    'solo funcionales',
    'declinar y cerrar',
    'déclin',
    'declina',
    'declinar consentimiento',
    'declinar todas',
    'solo las cookies necesarias',
    'només sutilitzen cookies quan és necessari',
    'no, sólo las estrictamente necesarias',
    'solo las necesarias',
    'acceptar només les necessàries',
    'acepta solo las necesarias',
    'aceptar solo lo esencial',
    'aceptar las obligatorias',
    'permitir solo cookies técnicas',
    'cookies técnicas',
    'permitir solo cookies técnicas',
    'usar solo cookies técnicas',
    'aceptar solo las esenciales',
    // continue without accepting
    /^continuar sin aceptar/is,
    // reject
    'no aceptar',
    // reject all
    'rexeitar todas',
    // do not consent
    'no consentir',
    // reject (Basque)
    'ukatu',
    // reject all (Basque)
    /^denak? baztertu|ukatu guztiak$/is,
    // no, thanks
    'no, gracias',
    // revoke consent
    'revocar consentimiento',
    // reject
    'rebutjar',
    // reject all
    'rebutja-ho tot',
    // reject cookies
    'rexeitar cookies',
    // only first-party cookies
    'sólo cookies propias',
    // accept only necessary cookies
    'aceptar solo cookies necesarias',
    // reject them
    'rebutja-les',
    // reject cookies
    'rebutjar cookies',
    // reject
    'rechazo',
    // reject all
    'rebutjar tot',
    // do not allow
    'no permitir',
    // only necessary cookies
    'sólo las cookies necesarias',
    // reject all
    'rebutja-les totes',
    // accept necessary
    'aceptar necesarias',
    // no, thanks
    'no, gràcies',
    // Refuse and close
    'refusar i tancar',
    // no thanks
    'no gracias',
    // Reject all cookies
    'rechazar todas cookies',
    // Click here to disable optional cookies
    'pulsa aquí para desactivar las cookies opcionales',
    // reject all
    'rebutjar-les totes',
    // reject all
    'rebutjar totes',
    // reject cookies
    'ukatu cookieak',
    // Reject all
    'ukatu dena',
    // Reject all
    'guztiak ukatu',
];

const REJECT_PATTERNS_SWEDISH = [
    'avvisa',
    'endast nödvändiga',
    'avvisa alla',
    'endast nödvändiga cookies',
    'neka',
    'neka alla',
    'avvisa allt',
    'avvisa alla cookies',
    'tillåt bara nödvändiga cookies',
    'bara nödvändiga',
    'bara nödvändiga cookies',
    'tillåt bara nödvändiga kakor',
    'endast nödvändiga kakor',
    'tillåt endast nödvändiga',
    'fortsätt utan att acceptera',
    'godkänn endast nödvändiga',
    'acceptera endast nödvändiga',
    'avvisa cookies',
    'tillåt endast nödvändiga kakor',
    'acceptera endast nödvändiga cookies',
    'neka kakor',
    'bara nödvändiga kakor',
    'neka alla cookies',
    'använd endast nödvändiga',
    'avvisa alla utom nödvändiga',
    'hantera eller avvisa',
    'neka alla utom nödvändiga kakor',
    'neka och stäng',
    'tillåt bara nödvändiga tjänster',
    'avvisa alla utom nödvändiga kakor',
    'avvisa alla valfria',
    'godkänn bara nödvändiga cookies',
    'acceptera endast nödvändiga kakor',
    'använd endast nödvändiga cookies',
    'avvisa alla kakor',
    'avvisa alla valmöjligheter',
    'avvisa ej nödvändiga',
    'avvisa icke-nödvändiga',
    'förneka',
    'godkänn bara nödvändiga',
    'godkänn bara nödvändiga kakor',
    'godkänn endast nödvändiga cookies',
    'godkänn endast nödvändiga kakor',
    'godta endast nödvändiga',
    'jag godkänner bara nödvändiga kakor',
    'nej, avvisa alla',
    'nej, bara nödvändiga',
    'nej, bara nödvändiga cookies',
    'neka alla utom nödvändiga',
    'neka alla.',
    'neka cookies',
    'neka samtliga',
    'ok, endast nödvändiga',
    'spara endast nödvändiga',
    'stäng och avvisa',
    'tillåt bara nödvändiga',
    'godkänn nödvändiga kakor',
    'godkänn nödvändiga',
    'acceptera nödvändiga',
    'strikt nödvändigt',
    'tillåt nödvändiga',
    'nödvändiga',
    'enbart nödvändiga',
    'jag godkänner nödvändiga kakor',
    'acceptera nödvändiga kakor',
    'godkänn enbart nödvändiga kakor',
    'godkänn nödvändiga cookies',
    'om du inte vill acceptera andra cookies än de som är tekniskt nödvändiga klickar du här',
    'acceptera enbart nödvändiga',
    'nödvändiga cookies',
    'jag godkänner enbart att ni använder nödvändiga cookies',
    '+ strikt nödvändiga cookies',
    'använd enbart nödvändiga cookies',
    'enbart nödvändiga cookies',
    'godkänn nödvändiga kakor stäng',
    'ok till nödvändiga',
    'strikt nödvändiga',
    'fortsätt utan att godkänna',
    'avböj alla cookies',
    'jag accepterar endast grundläggande kakor',
    'nej, jag avböjer',
    'tillåt inte cookies',
];

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
    // reject and pay
    /rechazar y pagar/is,
    // reject and subscribe
    /rechazar y suscribirse/is,
    // subscribe
    /^suscríbete$/is,
    // I reject and subscribe
    /^rechazo y me suscribo$/i,
];

export const SETTINGS_PATTERNS = [
    'settings',
    'preferences',
    /customi(s|z)e/is,
    'show details',
    'more options',
    /(manage|configure) (my|your) (preferences|choices|cookies)/is,
    'manage choices',
    /(cookie )?preference center/is,
    'change settings',
    'configure',
    'change my preferences',
    'cookie manager',
    'cookie preference',
    'let me choose',
    'cookieconsent preferences',
    /privacy choices/is,
    /(privacy|cookie|custom) settings/is,
    /cookies? (settings|preferences|setting)/is,
    /(manage|customize|customise|opt-out|edit).*(cookies|preferences|settings|options)/is,
    'cookie consent options',
    'privacy controls',
    'show purposes',
    // German
    'einstellungen',

    // Spanish (ES)
    /^(configurar|configuración|administrar)$/is,
    // personalise
    'personalizar',
    // more options
    'más opciones',
    // manage options
    'gestionar opciones',
    // manage/view/set preferences
    /^(gestionar|ver|establecer) preferencias$/is,
    // manage cookies
    'gestionar cookies',
    // preferences
    'preferencias',
    // show purposes
    'mostrar los propósitos',
    // settings (Basque)
    /^(konfigurazioa|konfiguratu)$/is,
    // show details
    'mostrar detalles',
    // details
    'detalles',
    // settings
    'ajustes',
    // cookie settings
    'ajustes de cookies',
    // cookie preferences
    'preferencias de cookies',
    // manage my preferences
    'gestionar mis preferencias',
    // cookie management
    'gestión cookies',
    // Privacy settings
    'datenschutzeinstellungen',
    // settings
    'réglages',
    // manage cookies
    'gestionar las cookies',
    // configure
    'configura',
    // manage
    'gestionar',
    // manage your preferences
    'gestiona tus preferencias',
    // set your choices
    'paramétrer vos choix',
    // settings
    'instellingen',
    // Personalize my choices
    'personalize my choices',
    // Privacy settings
    'privatsphäre einstellungen',
    // select individual purposes
    'seleccionar fines individuales',
    // adjust cookies
    'ajustar cookies',
    // view preferences
    'veure preferències',
    // no, adjust
    'no, ajustar',
    // cookie management
    'gestión de cookies',
    // cookie settings
    'configuración de cookies',
    // set cookies
    'configurar cookies',
    // customize cookies
    'personalizar cookies',
    // set preferences
    'configurar preferencias',
    // cookie settings
    'configuración de las cookies',
    // manage settings
    'gestionar configuración',
    // cookie settings
    'configuración cookies',
    // manage cookie settings
    'gestionar la configuración de cookies',
    // cookie and service settings
    'configuración de cookies y servicios',
    // customize my preferences
    'personalizar mis preferencias',
    // my preferences
    'mis preferencias',
    // cookie settings
    'configuración de cookie',
    // edit cookie settings
    'editar la configuración de cookies',
    // manage cookies
    'administrar cookies',
    // Personalize
    'personnaliser',
    // configure
    'tune configurar',
    // set my preferences
    'configurar mis preferencias',
    // customize
    'personalitza',
];

export const ACCEPT_PATTERNS = [
    /^(accept|allow)( all)?( cookies)?$/is,
    /i (accept|allow)( all)?/is,
    'yes',
    /^(i )?agree$/is,
    'continue with all',
    'accept and continue',
    /accept all above/is,
    /^(accept|agree) and close/is,
    'accept continue',
    'agree proceed',
    'allow and continue',
    'close and accept',
    /accept all$/is,
    'im ok with that',
    'accept optional cookies',

    /^alle (cookies )?akzeptieren$/is,

    // Spanish (ES)
    // accept
    /^acc?ept(ar|o)( cookies)?$/is,
    // accept all
    'permitir todas las cookies',
    // accept all
    /^(acc?eptar?|permitir) tod(o|as)$/is,
    // accept
    /^(accetta|aceptar las cookies|accepta)$/is,
    // accept and close
    'aceptar y cerrar',
    // accept and continue
    /^aceptar y (continuar|seguir|navegar)( gratis)?$/is,
    // accept for free
    'aceptar gratis',
    // accept all
    'accetta tutti i cookie',
    // accept all (Basque)
    /^denak? onartu$/is,
    // consent to all
    /consentir todo/is,
    // accept all
    'accepta-les totes',
    // accept all cookies
    'accepta totes les cookies',
    // allow all cookies
    'permetre totes les cookies',
    // consent
    'consentir',
    // Accept all
    'tout accepter',
    // allow
    'permitir',
    // Accept
    'accepter',
    // Accept
    'akzeptieren',
    // accept all
    'accepta-ho tot',
    // accept all
    'acceptar tot',
    'de acuerdo',
    // agree and close
    'de acuerdo y cerrar',
    // I agree
    'estoy de acuerdo',
    // Accept and close
    'acceptar i tancar',
    // yes, I agree
    'sí, estoy de acuerdo',
    // allow them all
    'permitirlas todas',
    // ok, I accept them
    'ok, las acepto',
    // Allow all
    'permet-les totes',
    // accept all
    /^acept(o|ar) todas las cookies$/is,
    // accept
    'onartu',
    // accept all
    'aceptar cookies opcionales',
    // Accept
    'aceitar',
    // yes, I accept
    'sí, acepto',
    // Accept and continue browsing
    'aceptar y seguir navegando',
    // Accept cookies
    'acceptar galetes',
    // Allow cookies
    'permitir cookies',
];

export const ACKNOWLEDGE_PATTERNS = [
    'ok',
    'close',
    'continue',
    'x',
    /^got it!?$/,
    'i understand',
    'dismiss',
    'okay',
    'acknowledge',
    /^close (banner|cookie notification)$/is,
    /understood$/is,
    'confirm my choices',

    // Spanish (ES)
    // understood
    'entendido',
    // ok
    'dacord',
    // close
    'cerca',
    // close
    'cerrar',
    // continue
    'continuar',
    // next
    'siguiente',
    // go to main content
    'ir al contenido principal',
    // understood!
    'entendido!',
    // understood!
    '¡entendido!',
    // I understand
    'lo entiendo',
    // ok
    'vale',
    // save preferences
    'guardar preferencias',
    // save selection
    'guardar selección',
    // allow selection
    'permitir la selección',
    // accept selection
    'aceptar selección',
    // continue
    'seguir',
    // Confirm
    'confirmar',
];

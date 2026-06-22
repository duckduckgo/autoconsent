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

    // Polish (PL)
    // uses cookies
    /korzysta z plików cookies?/gi,
    /strona.{0,50} używa ciasteczek .?cookies/gi,
    // We use cookies
    /(używamy|stosujemy|stosuje) plik(i|ów) cookie/i,
    // We use cookies
    /używamy cookies/i,
    /wykorzystujemy pliki cookie/gi,
    // we use cookies
    /korzystamy z plików cookie/i,
    /używamy ciasteczek/gi,
    /serwis (używa|korzysta z|stosuje) plik[ió]w? cookies?/gi,
    // we use technical (necessary) and analytical (optional) cookies
    /wykorzystują .{0,100}cookie/gi,
    // consent to using precise geolocation and identification data
    /zgodą my i nasi partnerzy możemy wykorzystywać precyzyjne dane geolokalizacyjne i identyfikację/gi,
    // This site uses cookies
    /wykorzyst(uje|ywane)( są)? pliki cookies?/gi,
    // we access and store information on your device
    /uzyskujemy dostęp i przechowujemy informacje na urządzeniu/gi,
    // Store information on a device or access it
    /przechowywanie informacji na urządzeniu lub dostęp do nich/i,
    // Together with our 1,711 partners, we use cookies
    /wraz z naszymi \d+ partnerami używamy plików typu\s*.?cookies?.?/i,
    // The purposes of processing your data by IAB Trusted Partners and the other Trusted Partners are as follows
    /zaufanych partnerów iab.{0,50} oraz pozostałych zaufanych partnerów/gi,
    // we access information on your device
    /uzyskujemy dostęp do informacji na twoim urządzeniu/i,
    // we use technologies such as cookies
    /korzystamy z technologii, takich jak pliki cookie/gi,
    // store and access information on your devices
    /przechowywać i uzyskiwać dostęp do informacji na twoich urządzeniach/gi,
    // We use technologies such as cookies
    /używamy technologii takich jak pliki cookie/gi,
    // We store our own cookies and our partners' cookies on your device
    /zapisujemy w twoim urządzeniu pliki cookies własne oraz naszych partnerów/i,
    // We process cookies, store information on the device, and process personal data or browsing data
    /przetwarzamy pliki cookies[\s\S]{0,80}przechowujemy informacje na urządzeniu/i,
    // We and our partners process information about users, their devices and online behavior using technologies such as cookies
    /my i nasi partnerzy przetwarzamy informacje na temat użytkowników, ich urządzeń i zachowań w sieci korzystając z technologii, takich jak ciasteczka/i,
    // using cookies ... we and our partners
    /za pomocą plików cookies.{0,100} my lub nasi partnerzy/gi,
    // information stored using cookies
    /informacji zapisanych za pomocą plików cookies/gi,
    // this page uses cookies
    /ta strona (wykorzystuje|używa|korzysta z) plik[ió]w? cookie/gi,
    // Our services use information stored in cookies
    /nasze serwisy używają informacji zapisanych w plikach cookies/i,
    // Using this website means you consent to the use of cookies.
    /korzystanie z tej witryny oznacza wyrażenie zgody na wykorzystanie plików cookies/i,
    // By clicking the “Accept all cookies” button you consent to the use of cookies (or other similar technologies) from us or our partners
    /akceptuj[ęe]? wszystkie pliki cookie|ustawienia prywatności|odrzucenie wszystkich/i,
    // Some cookies are necessary for our site to function properly
    /do poprawnego działania naszej strony niezbędne są niektóre pliki cookies/i,
    // This site uses cookies.
    /ta strona używa ciasteczek/i,
    // We use only anonymous cookies
    /używamy tylko anonimowych plików cookie/i,
    // We use our own cookies and third-party cookies
    /używamy własnych plików cookie i plików cookie stron trzecich/i,
    // We use cookies technology to store and/or access information on a device
    /korzystamy z technologii cookies/i,
    // Can we use cookies
    /możemy używać ciasteczek\b/i,
    // Our site uses cookies
    /nasza strona używa ciasteczek/i,
    // We use necessary, preference, analytical and marketing cookies.
    /używamy niezbędnych plików cookies, cookies preferencji, analitycznych oraz marketingowych/i,
    // Our website uses cookies
    /nasza witryna używa plików cookie/i,
    // This site uses cookies
    /ta strona korzysta z ciasteczek/i,
    // storing cookies on your device
    /przechowywanie plików cookie na swoim urządzeniu/i,
    // asks the user to accept cookies
    /zwraca się do użytkownika z prośbą o zaakceptowanie plików cookie/i,
    // The website uses cookies or similar technologies
    /strona używa plików cookies lub podobnych technologii/i,
    // our own cookies and those of our partners
    /pliki cookie własne oraz naszych partnerów/i,
    // together with our partners we process data in order to provide
    /wraz z naszymi partnerami przetwarzamy dane w celu zapewnienia/i,
    // uses cookie technology
    /\bwykorzystuje technolog(?:i[ęe]|ię) plik[ió]w? cookie/i,
    // we process your personal data using cookies
    /w tych celach przetwarzamy Twoje dane osobowe zebrane z wykorzystaniem cookies/i,
    // our site collects and processes personal data
    /nasza strona gromadzi i przetwarza dane osobowe/i,
    // this website uses its own cookies
    /ta witryna korzysta z własnych plików cookie/i,
    // Necessary cookies
    /niezbędne pliki cookie(?:.*niezb(?:ę|e)dne dla funkcjonowania strony)?/i,
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

const REJECT_PATTERNS_POLISH = [
    // reject all
    /(odrzuć|odrzucenie|odrzucam) (wszystkie|wszystko|wszystkich)/is,
    // decline
    'odrzuć',
    // decline
    'odmów',
    // decline
    'odmowa',
    // decline and learn more
    'odrzucam i chcę dowiedzieć się więcej',
    // accept only necessary
    /^(zaakceptuj )?tylko niezbędne$/is,
    // reject optional
    'odrzuć opcjonalne',
    // disagree
    'nie zgadzam się',
    // I do not consent
    'nie wyrażam zgody',
    // I reject
    'odrzucam',
    // continue without accepting
    'kontynuuj bez akceptacji',
    // no, thank you
    'nie, dziękuję',
    // I decline
    'odmawiam',
    // use only necessary cookies
    'korzystaj wyłącznie z niezbędnych plików cookie',
    // reject
    'odrzucać',
    // functional cookies (required)
    /^funkcjonalne pliki cookie \(wymagane\)$/is,
    // reject cookies
    'odrzuć pliki cookie',
    // required only
    'tylko wymagane',
    // necessary
    'niezbędne',
    // accept necessary
    'akceptuj niezbędne',
    // I do not accept
    'nie akceptuję',
    // continue without accepting
    'kontynuuj bez akceptowania',
    // Accept only required
    'akceptuj tylko wymagane',
    // I opt out
    'rezygnuję',
    // continue without consent
    'kontynuuj bez wyrażania zgody',
    // Only required cookies
    'tylko wymagane pliki cookie',
    // I confirm required
    'potwierdzam wymagane',
    // I accept required
    'akceptuję wymagane',
    // do not allow
    'nie zezwalaj',
    // Allow only necessary
    'zezwól tylko na niezbędne',
    // Accept necessary
    'zaakceptuj niezbędne',
    // I do not confirm
    'nie potwierdzam',
    // Allow necessary
    'zezwól na niezbędne',
    // Accept only necessary cookies
    'принимать только необходимые файлы cookie',
    // only strictly necessary
    'tylko bezwzględnie konieczne',
    // reject non-essential
    'odrzuć nieistotne',
    // accept required
    'akceptuj wymagane',
    // continue without accepting optional cookies
    'kontynuuj bez akceptowania opcjonalnych cookie',
    // no
    'nie',
    // Reject unnecessary
    'odrzuć niewymagane',
    // Reject cookies
    'tolak cookie',
    // reject
    'reddet',
    // do not consent and close
    'nie wyrażaj zgody i zamknij',
    // accept required
    'zaakceptuj wymagane',
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
    ...REJECT_PATTERNS_POLISH,
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

    // Polish (PL)
    // subscribe
    /^subskrybuj/i,
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

    // Polish (PL)
    // advanced settings
    'ustawień zaawansowanych',
    // customise
    /^(dostosuj|spersonalizuj|chcę dostosować|dostosuj zgody)$/is,
    // preferences
    /^(preferencje|zarządzaj preferencjami)$/is,
    // more options
    /więcej opcji/is,
    // manage cookies
    /^(zarządzaj cookies|zarządzaj plikami cookie)$/is,
    // show purposes
    /pokaż cele/is,
    // Configure
    'skonfiguruj',
    // View preferences
    'zobacz preferencje',
    // customize cookies
    'dostosuj pliki cookie',
    // go to privacy settings
    'przejdź do ustawień prywatności',
    // Manage cookie preferences
    'zarządzaj preferencjami plików cookie',
    // Manage consents
    'zarządzaj zgodami',
    // Consent settings
    'konfiguracja zgód',
    // Go to settings
    'przejdź do ustawień',
    // Personalize cookies
    'personalizuj pliki cookie',
    // Configure cookies
    'настроить файлы cookie',
    // manage cookie consents
    'zarządzaj zgodami dotyczącymi plików cookies',
    // go to cookie settings.
    /^przejdź do ustawień plików cookies\.$/is,
    // customize my cookies
    'dostosuj moje pliki cookie',
    // customize
    '️ dostosuj',
    // manage cookies and learn more
    'zarządzaj plikami cookie i dowiedz się więcej',
    // manage cookies
    'zarządzaj plikami cookies',
    // personalize my choices
    'spersonalizuj moje wybory',
    // customize my choices
    'dostosuj moje wybory',
    // change your preferences
    'zmień swoje preferencje',
    // Change consents
    'zmień zgody',
    // Set your choices
    'ustaw swoje wybory',
    // customize choices
    'dostosuj wybory',
    // Show details
    'pokaż szczegóły',
    // Let me choose
    'pozwól mi wybrać',
    /^(ustawienia|zmień ustawienia|zarządzaj opcjami)$/is,
    // Cookie settings
    'ustawienia plików cookie',
    // Advanced settings
    'ustawienia zaawansowane',
    // Cookie settings
    'ustawienia cookies',
    // Cookie settings
    'ustawieniach plików cookie',
    // Cookie settings
    'ustawienia plików cookies',
    // Manage settings
    'zarządzaj ustawieniami',
    // Customize settings
    'dostosuj ustawienia',
    // Manage my settings
    'zarządzaj moimi ustawieniami',
    // I'm changing settings
    'zmieniam ustawienia',
    // Customize selection
    'dostosuj wybór',
    // Privacy settings
    'ustawienia prywatności',
    // Preference settings
    'ustawienia preferencji',
    // I change consents
    'zmieniam zgody',
    // Edit settings
    'edytuj ustawienia',
    // Cookie settings
    'ustawienia cookie',
    // Cookie preferences
    'preferencje cookies',
    // Choose individual purposes
    'wybierz poszczególne cele',
    // More settings
    'więcej ustawień',
    // Change settings
    'zmiana ustawień',
    // Let me choose
    'pozwól mi wybrać pozwól mi wybrać',
    // Preference management
    'zarządzanie preferencjami',
    // Set preferences
    'ustaw preferencje',
    // Detailed settings
    'podrobné nastavení',
    // Cookie settings
    'ustawienia ciasteczek',
    // Manage
    'zarządzaj',
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

    // Polish (PL)
    // accept
    /^(akceptuję|akceptuj|zaakceptuj)$/is,
    // consent
    'zgoda',
    // accept all
    /^(akceptuję wszystkie|zaakceptuj zgody)$/is,
    // proceed to site/service
    'przejdź do serwisu',
    // accept and proceed
    'akceptuję i przechodzę do serwisu',
    // I agree
    'zgadzam się',
    // allow all
    'akceptuj wszystkie',
    // allow all
    'akceptuj wszystko',
    // allow all
    'zezwól na wszystkie',
    // accept all
    'akceptuje wszystkie',
    // consent to all
    'zgoda na wszystkie',
    // accept and close
    'zaakceptuj i zamknij',
    // accept cookies
    'akceptuj pliki cookie',
    // I confirm all
    'potwierdzam wszystkie',
    // ok, I agree
    'ok, zgadzam się',
    // I consent
    'wyrażam zgodę',
    // Allow
    'zezwól',
    // Accept, continue
    'akzeptieren weiter',
    // I accept!
    'akceptuję!',
    // I accept all cookies
    'akceptuję wszystkie cookies',
    // I confirm
    'potwierdzam',
    // accept
    'accepteren',
    // I accept all
    'akceptuję wszystko',
    // I accept all and use services
    'akceptuję wszystkie i korzystam z usług',
    // I accept all cookies
    'akceptuję wszystkie pliki cookies',
    // I accept
    'akceptuje',
    // accept cookies
    'akceptuj cookies',
    // accept all cookies
    'принять все файлы cookie',
    // consent to everything
    'wyraź zgodę na wszystko',
    // I accept all cookies
    'akceptuję wszystkie pliki cookie',
    // accept cookies
    'check akceptuję pliki cookies',
    // accepts cookies
    'akceptuje ciasteczka',
    // enable all cookies
    'włącz wszystkie ciasteczka',
    // accept cookies
    'zaakceptuj pliki cookies',
    // I consent to all
    'wyrażam zgodę na wszystkie',
    // accept cookies
    'zaakceptuj pliki cookie',
    // allow all
    'zezwolenie na wszystkie',
    // yes, I agree to all cookies
    'tak, zgadzam się na wszystkie pliki cookie',
    // accepting cookies
    'akceptowanie plików cookie',
    // accept and close
    'akceptuj i zamknij',
    // Accept and continue
    'akzeptieren und weiter',
    // yes
    'tak',
    // Accept
    'принять',
    // I agree
    'souhlasím',
    // accept all
    'zaakceptuj wszystkie',
    // accept all cookies
    'akceptuj wszystkie pliki cookie',
    // accept all
    'zaakceptuj wszystko',
    // Accept and continue
    'zaakceptuj i kontynuuj',
    // accept
    'kabul et',
    // Accept
    'annehmen',
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

    // Polish (PL)
    // accept selection
    /zezwól na wybór/is,
    // understood
    'rozumiem',
    // OK
    'w porządku',
    // close
    'zamknij',
    // close cookie information
    /zamknij informację o plikach cookies/is,
    // understood!
    'rozumiem!',
    // i understand, don't show again
    'rozumiem, nie pokazuj więcej',
    // OK, I understand
    'ok, rozumiem',
    // accept selected
    'akceptuj wybrane',
    // okay!
    'w porządku!',
    // ok, i understand
    'ok, zrozumiałem',
    // ok, i understand
    'ok rozumiem',
    // ok, i understand!
    'ok, rozumiem!',
    // Accept selected
    'zaakceptuj wybrane',
    // got it
    'понятно',
    // confirm
    'potwierdź',
    // I confirm selected
    'potwierdzam wybrane',
    // Allow selected
    'zezwól na wybrane',
    // Consent to selected
    'zgoda na wybrane',
];

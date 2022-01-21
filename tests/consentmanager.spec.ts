import generateCMPTests from "./runner";

generateCMPTests(
    [
        'https://sourceforge.net/',
        'https://www.dastelefonbuch.de/'
    ].map(site => [site, 'consentmanager.net'])
);

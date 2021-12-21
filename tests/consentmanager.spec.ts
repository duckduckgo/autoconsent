import generateCMPTests from "./runner";

generateCMPTests(
    [
        'https://sourceforge.net/',
        'https://parade.com/',
    ].map(site => [site, 'consentmanager.net'])
);

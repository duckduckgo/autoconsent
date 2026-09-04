import generateCMPTests from '../playwright/runner';

generateCMPTests(
    'consentmanager.net',
    [
        // 'https://sourceforge.net/', // disabled because of a botwall
        'https://www.dastelefonbuch.de/',
        'https://www.history.de/',
        'https://www.consentmanager.net/',
        'https://www.thermador.com/us/',
    ],
    {
        skipRegions: ['US', 'GB'],
    },
);

// US-only site whose banner is rendered a few seconds after the CMP API becomes available.
generateCMPTests('consentmanager.net', ['https://www.schluter.com/schluter-us/en_US/'], {
    onlyRegions: ['US'],
});

import generateCMPTests from '../playwright/runner';

generateCMPTests(
    'consentmanager.net',
    [
        // 'https://sourceforge.net/', // disabled because of a botwall
        'https://www.dastelefonbuch.de/',
        'https://www.history.de/',
        'https://www.consentmanager.net/',
        'https://www.thermador.com/us/',
        // renders its banner a few seconds after the JS API becomes usable
        'https://www.schluter.com/schluter-us/en_US/Profiles/c/P',
    ],
    {
        skipRegions: ['US', 'GB'],
    },
);

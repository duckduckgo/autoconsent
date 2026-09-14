import generateCMPTests from '../playwright/runner';

generateCMPTests(
    'consentmanager.net',
    [
        // 'https://sourceforge.net/', // disabled because of a botwall
        'https://www.dastelefonbuch.de/',
        'https://www.history.de/',
        'https://www.consentmanager.net/',
        'https://www.thermador.com/us/',
        // renders the consent layer in a shadow root
        'https://ein.anderes-wort.de/',
    ],
    {
        skipRegions: ['US', 'GB'],
    },
);

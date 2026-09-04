import generateCMPTests from '../playwright/runner';

generateCMPTests(
    'consentmanager.net',
    [
        // 'https://sourceforge.net/', // disabled because of a botwall
        'https://www.dastelefonbuch.de/',
        'https://www.history.de/',
        'https://www.consentmanager.net/',
        'https://www.thermador.com/us/',
        // banner rendered in a shadow root
        'https://correctiv.org/',
        'https://www.adcell.de/',
        'https://xn--grn-ioaaa.de/',
    ],
    {
        skipRegions: ['US', 'GB'],
    },
);

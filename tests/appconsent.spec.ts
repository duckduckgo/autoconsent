import generateCMPTests from '../playwright/runner';

// Button variants: refuseAll (darty, kare.be), skip (pagesjaunes, top-childcare), close (ti-aiuto).
generateCMPTests(
    'AppConsent',
    [
        'https://magasin.darty.com/',
        'https://www.pagesjaunes.fr/',
        'https://www.kare.be/',
        'https://www.top-childcare.co.uk/',
        'https://www.ti-aiuto.it/',
    ],
    {
        testOptIn: false,
        testOptOut: true,
        onlyRegions: ['US', 'FR'],
    },
);

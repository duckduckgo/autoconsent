import generateCMPTests from '../playwright/runner';

generateCMPTests('iubenda', ['https://www.rossignol.com/us/', 'https://www.lofficielusa.com/', 'https://www.3bmeteo.com/'], {
    skipRegions: ['AU'],
});

// accept-only banner without reject or customize buttons
generateCMPTests('iubenda', ['https://www.yogurtland.com/', 'https://www.greenplanet.net/'], {
    skipRegions: ['AU'],
    testSelfTest: false,
});

// "Do Not Sell" CCPA notice in California, GDPR banner in Europe
generateCMPTests('iubenda', ['https://newatlas.com/', 'https://plan.io/'], {
    skipRegions: ['US', 'AU'],
});

// custom template (#ameConsentUI) that locks body scrolling until its banner callbacks run
generateCMPTests(
    'iubenda',
    ['https://www.nostrofiglio.it/neonato/cura-e-salute/pianto-ininterrotto-neonato', 'https://www.soldionline.it/'],
    {
        skipRegions: ['AU'],
    },
);

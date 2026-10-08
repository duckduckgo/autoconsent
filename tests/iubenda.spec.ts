import generateCMPTests from '../playwright/runner';

generateCMPTests('iubenda', ['https://www.rossignol.com/us/', 'https://www.lofficielusa.com/', 'https://www.3bmeteo.com/'], {
    skipRegions: ['AU'],
});

// accept-only banner without reject or customize buttons
generateCMPTests('iubenda', ['https://www.yogurtland.com/', 'https://www.greenplanet.net/'], {
    skipRegions: ['AU'],
    testSelfTest: false,
});

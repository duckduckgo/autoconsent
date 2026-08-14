import generateCMPTests from '../playwright/runner';

generateCMPTests('iubenda', ['https://www.rossignol.com/us/', 'https://www.lofficielusa.com/', 'https://www.3bmeteo.com/'], {
    skipRegions: ['AU'],
});

generateCMPTests('iubenda', ['https://mediasetinfinity.mediaset.it/', 'https://www.tgcom24.mediaset.it/'], {
    testOptIn: false,
    testSelfTest: false,
});

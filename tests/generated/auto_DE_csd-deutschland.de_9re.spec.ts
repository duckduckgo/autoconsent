import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_csd-deutschland.de_9re', ['https://csd-deutschland.de/en/csd-deutschland-e-v-english/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});

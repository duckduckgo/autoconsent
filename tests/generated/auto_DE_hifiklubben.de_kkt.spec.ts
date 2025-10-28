import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_hifiklubben.de_kkt', ['https://www.hifiklubben.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});

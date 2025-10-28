import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_vom-achterhof.de_tm5', ['https://vom-achterhof.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});

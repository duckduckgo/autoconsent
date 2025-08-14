import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_haspa-insider.de_cgb', ['https://www.haspa-insider.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});

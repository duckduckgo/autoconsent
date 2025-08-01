import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_keukenloods.nl_8qz', ['https://www.keukenloods.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});

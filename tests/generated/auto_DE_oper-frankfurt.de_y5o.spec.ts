import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_oper-frankfurt.de_y5o', ['https://oper-frankfurt.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});

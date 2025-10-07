import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_oper-frankfurt.de_rzu', ['https://oper-frankfurt.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});

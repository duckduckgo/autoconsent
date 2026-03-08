import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_cementenbeton.nl_uja', ['https://cementenbeton.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});

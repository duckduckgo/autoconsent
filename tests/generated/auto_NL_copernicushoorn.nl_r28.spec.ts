import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_copernicushoorn.nl_r28', ['https://copernicushoorn.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});

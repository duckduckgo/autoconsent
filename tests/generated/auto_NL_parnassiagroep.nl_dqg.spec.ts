import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_parnassiagroep.nl_dqg', ['https://www.parnassiagroep.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});

import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_parnassiagroep.nl_7b4', ['https://www.parnassiagroep.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});

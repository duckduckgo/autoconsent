import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_dekleinekomedie.nl_c4r', ['https://www.dekleinekomedie.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});

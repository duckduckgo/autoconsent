import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_dekleinekomedie.nl_dr9', ['https://www.dekleinekomedie.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});

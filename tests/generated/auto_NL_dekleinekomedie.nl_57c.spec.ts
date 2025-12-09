import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_dekleinekomedie.nl_57c', ['https://www.dekleinekomedie.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});

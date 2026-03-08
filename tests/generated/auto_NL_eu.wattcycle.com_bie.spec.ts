import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_eu.wattcycle.com_bie', ['https://eu.wattcycle.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});

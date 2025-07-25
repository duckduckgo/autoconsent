import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_higherlevel.nl_imq', ['https://www.higherlevel.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});

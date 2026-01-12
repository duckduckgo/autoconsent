import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_discovergroningen.com_5rp', ['https://discovergroningen.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});

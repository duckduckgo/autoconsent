import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_blackfridaydealz.nl_fln', ['https://www.blackfridaydealz.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});

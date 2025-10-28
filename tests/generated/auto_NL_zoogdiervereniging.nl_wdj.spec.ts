import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_zoogdiervereniging.nl_wdj', ['https://www.zoogdiervereniging.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});

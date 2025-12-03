import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_noordwijk.info_fpw', ['https://www.noordwijk.info/nl'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});

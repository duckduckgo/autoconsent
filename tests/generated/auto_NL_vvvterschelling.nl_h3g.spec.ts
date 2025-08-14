import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_vvvterschelling.nl_h3g', ['https://www.vvvterschelling.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});

import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_vvvterschelling.nl_aaa', ['https://www.vvvterschelling.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});

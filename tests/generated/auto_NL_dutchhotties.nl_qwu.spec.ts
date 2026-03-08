import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_dutchhotties.nl_qwu', ['https://dutchhotties.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});

import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_tenhoven-bomen.nl_da1', ['https://www.tenhoven-bomen.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});

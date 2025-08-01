import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_tenhoven-bomen.nl_dil', ['https://www.tenhoven-bomen.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});

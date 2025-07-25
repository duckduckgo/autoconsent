import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_tuinmeubelshop.nl_2ke', ['https://www.tuinmeubelshop.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});

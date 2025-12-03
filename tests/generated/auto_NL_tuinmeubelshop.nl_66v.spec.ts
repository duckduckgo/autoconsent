import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_tuinmeubelshop.nl_66v', ['https://www.tuinmeubelshop.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});

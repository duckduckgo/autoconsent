import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_homefinance.nl_lbq', ['https://www.homefinance.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});

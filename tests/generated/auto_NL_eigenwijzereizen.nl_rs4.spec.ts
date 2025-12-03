import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_eigenwijzereizen.nl_rs4', ['https://www.eigenwijzereizen.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});

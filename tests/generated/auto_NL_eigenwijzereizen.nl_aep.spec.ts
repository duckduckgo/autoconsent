import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_eigenwijzereizen.nl_aep', ['https://www.eigenwijzereizen.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});

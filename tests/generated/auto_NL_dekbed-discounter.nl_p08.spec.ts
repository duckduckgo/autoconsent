import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_dekbed-discounter.nl_p08', ['https://www.dekbed-discounter.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});

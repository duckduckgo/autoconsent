import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_diergezondheid.nl_n7j', ['https://diergezondheid.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});

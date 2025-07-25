import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_singerlaren.nl_l02', ['https://www.singerlaren.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});

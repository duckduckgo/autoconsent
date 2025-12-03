import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_singerlaren.nl_ik0', ['https://www.singerlaren.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});

import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_optimalegezondheid.com_csg', ['https://www.optimalegezondheid.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});

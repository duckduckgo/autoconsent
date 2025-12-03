import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_optimalegezondheid.com_u4j', ['https://www.optimalegezondheid.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});

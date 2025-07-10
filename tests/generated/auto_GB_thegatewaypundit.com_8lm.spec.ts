import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_thegatewaypundit.com_8lm', ['https://www.thegatewaypundit.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});

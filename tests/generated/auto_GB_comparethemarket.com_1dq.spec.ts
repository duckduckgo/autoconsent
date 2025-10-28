import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_comparethemarket.com_1dq', ['https://www.comparethemarket.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});

import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_comparethemarket.com_n9j', ['https://www.comparethemarket.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});

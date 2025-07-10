import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_weber.com_0', ['https://www.weber.com/GB/en/home/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});

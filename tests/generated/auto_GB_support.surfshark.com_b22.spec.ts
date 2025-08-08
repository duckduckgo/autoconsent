import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_support.surfshark.com_b22', ['https://support.surfshark.com/hc/en-us'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});

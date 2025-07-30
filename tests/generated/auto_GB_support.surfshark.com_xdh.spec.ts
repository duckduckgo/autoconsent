import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_support.surfshark.com_xdh', ['https://support.surfshark.com/hc/en-us'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});

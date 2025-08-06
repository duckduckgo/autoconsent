import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_xconfessions.com_yd6', ['https://xconfessions.com/age-verification'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});

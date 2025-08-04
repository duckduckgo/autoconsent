import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_xconfessions.com_4ll', ['https://xconfessions.com/age-verification'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});

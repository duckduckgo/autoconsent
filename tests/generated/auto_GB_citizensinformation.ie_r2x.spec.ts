import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_citizensinformation.ie_r2x', ['https://www.citizensinformation.ie/en/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});

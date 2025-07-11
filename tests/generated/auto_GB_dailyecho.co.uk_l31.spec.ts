import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_dailyecho.co.uk_l31', ['https://www.dailyecho.co.uk/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});

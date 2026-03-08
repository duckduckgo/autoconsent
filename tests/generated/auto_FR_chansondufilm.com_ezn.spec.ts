import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_chansondufilm.com_ezn', ['https://chansondufilm.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});

import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_app.traveltime.com_fde', ['https://app.traveltime.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});

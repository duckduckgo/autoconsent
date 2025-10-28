import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_naturisme-tv.com_81q', ['https://www.naturisme-tv.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});

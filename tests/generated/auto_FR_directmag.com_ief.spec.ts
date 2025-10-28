import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_directmag.com_ief', ['https://www.directmag.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});

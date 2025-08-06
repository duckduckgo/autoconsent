import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_bonoboplanet.com_urt', ['https://www.bonoboplanet.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});

import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_bonoboplanet.com_1ty', ['https://www.bonoboplanet.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});

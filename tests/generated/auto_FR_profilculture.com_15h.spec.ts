import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_profilculture.com_15h', ['https://www.profilculture.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});

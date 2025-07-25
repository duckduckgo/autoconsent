import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_profilculture.com_iiu', ['https://www.profilculture.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});

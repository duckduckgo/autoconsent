import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_ubaldi.com_xzo', ['https://www.ubaldi.com/accueil/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});

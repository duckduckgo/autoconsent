import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_ubaldi.com_pys', ['https://www.ubaldi.com/accueil/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});

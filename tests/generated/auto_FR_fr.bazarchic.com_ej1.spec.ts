import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_fr.bazarchic.com_ej1', ['https://fr.bazarchic.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});

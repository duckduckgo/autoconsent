import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_fr.bazarchic.com_6cr', ['https://fr.bazarchic.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});

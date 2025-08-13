import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_fr.bazarchic.com_06k', ['https://fr.bazarchic.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});

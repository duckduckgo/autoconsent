import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_laplateforme.com_nlk', ['https://www.laplateforme.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});

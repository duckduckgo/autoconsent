import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_laplateforme.com_187', ['https://www.laplateforme.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});

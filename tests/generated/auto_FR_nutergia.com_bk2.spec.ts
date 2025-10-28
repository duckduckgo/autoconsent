import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_nutergia.com_bk2', ['https://www.nutergia.com/fr/fr'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});

import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_meilleurtaux.com_dbp', ['https://www.meilleurtaux.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});

import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_energie.meilleurtaux.com_g01', ['https://energie.meilleurtaux.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});

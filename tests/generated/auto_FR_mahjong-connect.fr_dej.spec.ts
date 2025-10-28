import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_mahjong-connect.fr_dej', ['https://mahjong-connect.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});

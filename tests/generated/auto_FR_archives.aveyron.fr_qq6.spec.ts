import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_archives.aveyron.fr_qq6', ['https://archives.aveyron.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});

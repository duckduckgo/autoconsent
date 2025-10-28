import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_voyagespirates.fr_mfq', ['https://www.voyagespirates.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});

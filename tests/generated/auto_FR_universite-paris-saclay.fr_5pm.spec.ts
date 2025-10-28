import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_universite-paris-saclay.fr_5pm', ['https://www.universite-paris-saclay.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});

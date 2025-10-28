import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_terre.defense.gouv.fr_xz8', ['https://www.terre.defense.gouv.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});

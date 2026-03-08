import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_formations.univ-perp.fr_zl9', ['https://formations.univ-perp.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});

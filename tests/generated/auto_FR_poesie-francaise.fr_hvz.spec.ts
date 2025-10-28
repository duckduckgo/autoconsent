import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_poesie-francaise.fr_hvz', ['https://www.poesie-francaise.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});

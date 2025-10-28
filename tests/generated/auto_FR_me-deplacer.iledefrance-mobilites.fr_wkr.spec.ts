import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_me-deplacer.iledefrance-mobilites.fr_wkr', ['https://me-deplacer.iledefrance-mobilites.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});

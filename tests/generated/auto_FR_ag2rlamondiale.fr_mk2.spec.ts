import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_ag2rlamondiale.fr_mk2', ['https://www.ag2rlamondiale.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});

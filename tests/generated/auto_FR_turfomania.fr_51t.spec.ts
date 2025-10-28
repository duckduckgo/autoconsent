import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_turfomania.fr_51t', ['https://www.turfomania.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});

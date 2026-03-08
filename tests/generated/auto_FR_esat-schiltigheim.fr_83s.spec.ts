import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_esat-schiltigheim.fr_83s', ['https://esat-schiltigheim.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});

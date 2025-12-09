import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_labonnecause.fr_o0i', ['https://labonnecause.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});

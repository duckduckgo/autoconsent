import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_guide-piscine.fr_e61', ['https://www.guide-piscine.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});

import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_vanlifemag.fr_a35', ['https://www.vanlifemag.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});

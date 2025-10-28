import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_sorbonne-universite.fr_0ml', ['https://www.sorbonne-universite.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});

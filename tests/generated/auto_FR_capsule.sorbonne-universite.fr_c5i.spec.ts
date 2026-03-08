import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_capsule.sorbonne-universite.fr_c5i', ['https://capsule.sorbonne-universite.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});

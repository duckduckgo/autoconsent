import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_facealinceste.fr_cgv', ['https://facealinceste.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});

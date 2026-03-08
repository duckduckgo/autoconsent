import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_editionsdelaube.fr_763', ['https://editionsdelaube.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});

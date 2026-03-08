import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_abo.mediapart.fr_uv0', ['https://abo.mediapart.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});

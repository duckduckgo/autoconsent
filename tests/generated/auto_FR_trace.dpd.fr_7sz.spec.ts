import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_trace.dpd.fr_7sz', ['https://trace.dpd.fr/fr/trace'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});

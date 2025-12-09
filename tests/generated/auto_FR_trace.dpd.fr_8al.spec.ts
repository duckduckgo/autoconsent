import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_trace.dpd.fr_8al', ['https://trace.dpd.fr/fr/trace'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});

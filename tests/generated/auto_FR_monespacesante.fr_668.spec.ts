import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_monespacesante.fr_668', ['https://www.monespacesante.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});

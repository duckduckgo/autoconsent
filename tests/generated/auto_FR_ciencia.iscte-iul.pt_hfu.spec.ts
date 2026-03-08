import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_ciencia.iscte-iul.pt_hfu', ['https://ciencia.iscte-iul.pt/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});

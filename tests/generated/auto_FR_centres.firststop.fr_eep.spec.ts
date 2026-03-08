import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_centres.firststop.fr_eep', ['https://centres.firststop.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});

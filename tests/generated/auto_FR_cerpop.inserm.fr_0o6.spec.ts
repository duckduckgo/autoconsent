import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_cerpop.inserm.fr_0o6', ['https://cerpop.inserm.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});

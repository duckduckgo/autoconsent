import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_abc-toulouse.fr_cfm', ['https://abc-toulouse.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});

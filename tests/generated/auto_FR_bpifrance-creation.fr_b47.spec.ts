import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_bpifrance-creation.fr_b47', ['https://bpifrance-creation.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});

import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_bpifrance-creation.fr_o8y', ['https://bpifrance-creation.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});

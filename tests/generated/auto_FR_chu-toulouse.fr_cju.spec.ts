import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_chu-toulouse.fr_cju', ['https://www.chu-toulouse.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});

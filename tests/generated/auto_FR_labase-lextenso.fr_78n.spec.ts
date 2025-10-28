import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_labase-lextenso.fr_78n', ['https://www.labase-lextenso.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});

import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_numerique.gouv.fr_smk', ['https://www.numerique.gouv.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});

import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_formations.mer.gouv.fr_6v5', ['https://formations.mer.gouv.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});

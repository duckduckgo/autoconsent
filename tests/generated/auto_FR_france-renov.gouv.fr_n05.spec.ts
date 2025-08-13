import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_france-renov.gouv.fr_n05', ['https://france-renov.gouv.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});

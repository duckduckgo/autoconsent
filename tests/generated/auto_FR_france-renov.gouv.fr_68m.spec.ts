import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_france-renov.gouv.fr_68m', ['https://france-renov.gouv.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});

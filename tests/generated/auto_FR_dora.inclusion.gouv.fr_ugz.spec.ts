import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_dora.inclusion.gouv.fr_ugz', ['https://dora.inclusion.gouv.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});

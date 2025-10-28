import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_cuisinezpourvospapilles.fr_hlr', ['https://www.cuisinezpourvospapilles.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});

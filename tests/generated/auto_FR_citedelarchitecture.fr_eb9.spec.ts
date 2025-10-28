import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_citedelarchitecture.fr_eb9', ['https://www.citedelarchitecture.fr/fr'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});

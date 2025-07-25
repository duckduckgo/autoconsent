import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_eu-careers.europa.eu_o8o', ['https://eu-careers.europa.eu/en'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});

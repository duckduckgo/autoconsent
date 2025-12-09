import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_youth.europa.eu_so1', ['https://youth.europa.eu/home_en'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});

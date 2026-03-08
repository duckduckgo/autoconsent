import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_academy.europa.eu_qvp', ['https://academy.europa.eu/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});

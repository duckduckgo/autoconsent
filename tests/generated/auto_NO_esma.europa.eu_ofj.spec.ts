import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_esma.europa.eu_ofj', ['https://www.esma.europa.eu/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});

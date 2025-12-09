import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_efsa.europa.eu_29b', ['https://www.efsa.europa.eu/en'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});

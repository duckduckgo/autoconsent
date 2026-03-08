import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_eu-careers.europa.eu_4w4', ['https://eu-careers.europa.eu/en'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});

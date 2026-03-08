import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_eu-cap-network.ec.europa.eu_oi4', ['https://eu-cap-network.ec.europa.eu/index_en'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});

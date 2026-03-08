import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_epale.ec.europa.eu_bdu', ['https://epale.ec.europa.eu/en'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});

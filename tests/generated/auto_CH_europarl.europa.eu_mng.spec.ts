import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_europarl.europa.eu_mng', ['https://www.europarl.europa.eu/portal/en'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});

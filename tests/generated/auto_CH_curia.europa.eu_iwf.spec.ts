import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_curia.europa.eu_iwf', ['https://curia.europa.eu/site/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});

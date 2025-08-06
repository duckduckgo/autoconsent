import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_eike-klima-energie.eu_lpx', ['https://eike-klima-energie.eu/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});

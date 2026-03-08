import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_ch.citizenwatch.eu_2g9', ['https://ch.citizenwatch.eu/de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});

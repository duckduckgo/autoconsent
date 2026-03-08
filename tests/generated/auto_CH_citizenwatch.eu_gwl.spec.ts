import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_citizenwatch.eu_gwl', ['https://citizenwatch.eu/en/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});

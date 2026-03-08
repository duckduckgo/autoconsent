import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_airportwebcams.net_egi', ['https://airportwebcams.net/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});

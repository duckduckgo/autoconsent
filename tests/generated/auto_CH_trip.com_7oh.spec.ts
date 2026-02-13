import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_trip.com_7oh', ['https://ch.trip.com/?locale=de-ch'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});

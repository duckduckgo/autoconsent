import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_louis-moto.ch_gpx', ['https://www.louis-moto.ch/de'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});

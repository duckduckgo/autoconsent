import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_solarmarkt.ch_9xt', ['https://www.solarmarkt.ch/de'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});

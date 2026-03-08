import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_braun-raumsysteme.ch_2yc', ['https://braun-raumsysteme.ch/de-CH/start'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});

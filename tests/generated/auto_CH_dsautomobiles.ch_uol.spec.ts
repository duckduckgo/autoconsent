import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_dsautomobiles.ch_uol', ['https://www.dsautomobiles.ch/de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});

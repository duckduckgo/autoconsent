import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_echosdunet.net_hjw', ['https://www.echosdunet.net/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});

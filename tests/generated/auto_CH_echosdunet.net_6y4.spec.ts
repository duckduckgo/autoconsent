import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_echosdunet.net_6y4', ['https://www.echosdunet.net/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});

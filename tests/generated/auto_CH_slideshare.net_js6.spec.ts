import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_slideshare.net_js6', ['https://www.slideshare.net/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});

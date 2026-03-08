import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_dunstabzugsfilter-shop.ch_3h5', ['https://dunstabzugsfilter-shop.ch/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});

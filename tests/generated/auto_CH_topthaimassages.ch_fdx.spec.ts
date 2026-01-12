import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_topthaimassages.ch_fdx', ['https://topthaimassages.ch/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});

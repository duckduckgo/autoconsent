import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_topthaimassages.ch_6de', ['https://topthaimassages.ch/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});

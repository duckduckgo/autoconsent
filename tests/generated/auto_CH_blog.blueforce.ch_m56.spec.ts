import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_blog.blueforce.ch_m56', ['https://blog.blueforce.ch/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});

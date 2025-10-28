import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_blog.giallozafferano.it_12d', ['https://blog.giallozafferano.it/community/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});

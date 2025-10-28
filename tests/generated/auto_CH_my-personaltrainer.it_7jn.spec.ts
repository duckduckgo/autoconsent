import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_my-personaltrainer.it_7jn', ['https://www.my-personaltrainer.it/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});

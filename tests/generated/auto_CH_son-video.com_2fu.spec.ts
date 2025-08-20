import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_son-video.com_2fu', ['https://www.son-video.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});

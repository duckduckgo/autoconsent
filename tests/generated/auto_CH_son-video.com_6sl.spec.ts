import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_son-video.com_6sl', ['https://www.son-video.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});

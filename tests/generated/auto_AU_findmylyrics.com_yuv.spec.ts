import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_findmylyrics.com_yuv', ['https://findmylyrics.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});

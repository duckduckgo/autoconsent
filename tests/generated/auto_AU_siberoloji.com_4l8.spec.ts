import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_siberoloji.com_4l8', ['https://www.siberoloji.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});

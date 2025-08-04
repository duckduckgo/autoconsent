import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_makerworld.com_4l4', ['https://makerworld.com/en'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});

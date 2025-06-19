import generateCMPTests from '../playwright/runner';
generateCMPTests('auto_AU_skysports.com_7p5', ['https://www.skysports.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['AU'],
});

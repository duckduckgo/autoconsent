import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_skysports.com_5kh', ['https://www.skysports.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['AU'],
});

import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_skysports.com_h7x', ['https://www.skysports.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['AU'],
});

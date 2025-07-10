import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_songselect.ccli.com_zxa', ['https://songselect.ccli.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['US'],
});

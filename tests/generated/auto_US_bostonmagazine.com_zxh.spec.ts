import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_bostonmagazine.com_zxh', ['https://www.bostonmagazine.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['US'],
});

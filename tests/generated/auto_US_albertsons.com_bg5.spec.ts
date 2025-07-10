import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_albertsons.com_bg5', ['https://www.albertsons.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['US'],
});

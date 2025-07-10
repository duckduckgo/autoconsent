import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_momsmeals.com_bwg', ['https://www.momsmeals.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['US'],
});

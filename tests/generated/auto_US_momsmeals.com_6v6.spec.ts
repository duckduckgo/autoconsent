import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_momsmeals.com_6v6', ['https://www.momsmeals.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['US'],
});

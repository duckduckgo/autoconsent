import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_momsmeals.com_bys', ['https://www.momsmeals.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['US'],
});

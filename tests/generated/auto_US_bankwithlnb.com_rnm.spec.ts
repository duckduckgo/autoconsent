import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_bankwithlnb.com_rnm', ['https://bankwithlnb.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['US'],
});

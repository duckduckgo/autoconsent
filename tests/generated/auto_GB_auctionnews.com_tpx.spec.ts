import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_auctionnews.com_tpx', ['https://auctionnews.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});

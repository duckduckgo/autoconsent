import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_auctionhouselondon.co.uk_b19', ['https://auctionhouselondon.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});

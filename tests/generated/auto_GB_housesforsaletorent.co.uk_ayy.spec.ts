import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_housesforsaletorent.co.uk_ayy', ['https://housesforsaletorent.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});

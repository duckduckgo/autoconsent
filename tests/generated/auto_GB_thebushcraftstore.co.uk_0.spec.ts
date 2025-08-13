import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_thebushcraftstore.co.uk_0', ['https://www.thebushcraftstore.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});

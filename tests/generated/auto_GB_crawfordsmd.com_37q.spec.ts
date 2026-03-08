import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_crawfordsmd.com_37q', ['https://crawfordsmd.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});

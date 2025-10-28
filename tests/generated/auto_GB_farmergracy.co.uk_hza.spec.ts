import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_farmergracy.co.uk_hza', ['https://www.farmergracy.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});

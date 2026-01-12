import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_farmergracy.co.uk_dl3', ['https://www.farmergracy.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});

import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_business.bankofscotland.co.uk_0', ['https://business.bankofscotland.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});

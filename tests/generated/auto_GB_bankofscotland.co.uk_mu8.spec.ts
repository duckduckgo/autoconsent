import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_bankofscotland.co.uk_mu8', ['https://www.bankofscotland.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});

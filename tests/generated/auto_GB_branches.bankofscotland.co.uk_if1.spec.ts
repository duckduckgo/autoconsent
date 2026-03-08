import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_branches.bankofscotland.co.uk_if1', ['https://branches.bankofscotland.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});

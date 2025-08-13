import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_thruxtonracing.co.uk_xd1', ['https://thruxtonracing.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});

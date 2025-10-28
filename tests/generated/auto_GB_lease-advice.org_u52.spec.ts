import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_lease-advice.org_u52', ['https://www.lease-advice.org/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});

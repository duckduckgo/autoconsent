import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_charteredforesters.org_k04', ['https://charteredforesters.org/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});

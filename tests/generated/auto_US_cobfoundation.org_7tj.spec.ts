import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_cobfoundation.org_7tj', ['https://cobfoundation.org/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['US'],
});

import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_providers.sharecare.com_in3', ['https://providers.sharecare.com/find-a-doctor'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['US'],
});

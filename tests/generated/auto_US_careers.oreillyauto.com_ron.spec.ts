import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_careers.oreillyauto.com_ron', ['https://careers.oreillyauto.com/us/en'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['US'],
});

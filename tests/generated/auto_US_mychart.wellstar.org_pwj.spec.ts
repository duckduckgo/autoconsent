import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_mychart.wellstar.org_pwj', ['https://mychart.wellstar.org/MyChart/Authentication/Login?'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['US'],
});

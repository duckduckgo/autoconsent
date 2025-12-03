import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_mychart.wellstar.org_pwj', ['https://www.wellstar.org/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['US'],
});

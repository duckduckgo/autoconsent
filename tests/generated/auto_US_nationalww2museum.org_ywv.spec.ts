import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_nationalww2museum.org_ywv', ['https://www.nationalww2museum.org/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['US'],
});

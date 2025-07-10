import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_nationalinterest.org_ouv', ['https://nationalinterest.org/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['US'],
});

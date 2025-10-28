import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_commonapp.org_7u0', ['https://www.commonapp.org/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['US'],
});

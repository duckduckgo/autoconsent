import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_coeurdalene.org_3e6', ['https://coeurdalene.org/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['US'],
});

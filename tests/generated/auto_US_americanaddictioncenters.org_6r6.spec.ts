import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_americanaddictioncenters.org_6r6', ['https://americanaddictioncenters.org/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['US'],
});

import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_coinagerings.org_bnr', ['https://coinagerings.org/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['US'],
});

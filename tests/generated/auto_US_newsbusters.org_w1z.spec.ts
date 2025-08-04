import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_newsbusters.org_w1z', ['https://www.newsbusters.org/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['US'],
});

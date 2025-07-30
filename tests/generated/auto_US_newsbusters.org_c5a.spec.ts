import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_newsbusters.org_c5a', ['https://www.newsbusters.org/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['US'],
});

import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_blog.hubspot.com_ex5', ['https://blog.hubspot.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['US'],
});

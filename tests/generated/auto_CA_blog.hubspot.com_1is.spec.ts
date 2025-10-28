import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_blog.hubspot.com_1is', ['https://blog.hubspot.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});

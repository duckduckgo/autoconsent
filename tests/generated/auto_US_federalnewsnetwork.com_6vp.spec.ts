import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_federalnewsnetwork.com_6vp', ['https://federalnewsnetwork.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['US'],
});

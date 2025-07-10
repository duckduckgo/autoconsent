import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_federalnewsnetwork.com_llo', ['https://federalnewsnetwork.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['US'],
});

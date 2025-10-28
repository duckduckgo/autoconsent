import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_onlinelibrary.wiley.com_d3k', ['https://onlinelibrary.wiley.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});

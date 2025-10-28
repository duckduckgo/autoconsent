import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_onlinelibrary.wiley.com_yy8', ['https://onlinelibrary.wiley.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});

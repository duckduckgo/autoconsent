import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_onlinelibrary.wiley.com_eiv', ['https://onlinelibrary.wiley.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});

import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_drumsrus.com.au_78j', ['https://drumsrus.com.au/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});

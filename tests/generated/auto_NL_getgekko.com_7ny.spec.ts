import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_getgekko.com_7ny', ['https://www.getgekko.com/en/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});

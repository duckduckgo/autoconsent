import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_evike-europe.com_wmg', ['https://evike-europe.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});

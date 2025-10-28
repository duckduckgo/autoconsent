import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_creditcardvergelijking.nl_koh', ['https://www.creditcardvergelijking.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});

import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_careers.bol.com_0m4', ['https://careers.bol.com/nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});

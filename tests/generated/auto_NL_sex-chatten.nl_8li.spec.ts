import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_sex-chatten.nl_8li', ['https://www.sex-chatten.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});

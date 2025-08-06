import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_villamedia.nl_akk', ['https://www.villamedia.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});

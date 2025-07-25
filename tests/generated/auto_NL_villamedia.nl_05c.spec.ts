import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_villamedia.nl_05c', ['https://www.villamedia.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});

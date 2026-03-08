import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_bastdeplantgigant.nl_r7e', ['https://bastdeplantgigant.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});

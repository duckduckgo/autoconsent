import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_computergigant.nl_7i8', ['https://www.computergigant.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});

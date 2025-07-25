import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_vanbeekart.nl_6ml', ['https://www.vanbeekart.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});

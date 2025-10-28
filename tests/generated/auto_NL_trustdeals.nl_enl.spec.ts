import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_trustdeals.nl_enl', ['https://www.trustdeals.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});

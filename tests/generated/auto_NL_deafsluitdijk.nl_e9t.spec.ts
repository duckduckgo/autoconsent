import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_deafsluitdijk.nl_e9t', ['https://deafsluitdijk.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});

import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_verkeersdrukte.nl_cet', ['https://verkeersdrukte.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});

import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_fortresortbeemster.nl_swn', ['https://www.fortresortbeemster.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});

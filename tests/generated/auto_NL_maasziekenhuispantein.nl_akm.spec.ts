import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_maasziekenhuispantein.nl_akm', ['https://www.maasziekenhuispantein.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});

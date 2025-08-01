import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_natuurhuisje.nl_t46', ['https://www.natuurhuisje.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});

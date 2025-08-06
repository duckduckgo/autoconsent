import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_natuurhuisje.nl_o6d', ['https://www.natuurhuisje.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});

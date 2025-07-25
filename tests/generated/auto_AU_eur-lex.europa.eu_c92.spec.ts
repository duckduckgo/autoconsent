import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_eur-lex.europa.eu_c92', ['https://eur-lex.europa.eu/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});

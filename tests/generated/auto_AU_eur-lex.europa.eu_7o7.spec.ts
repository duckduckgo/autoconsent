import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_eur-lex.europa.eu_7o7', ['https://eur-lex.europa.eu/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['AU'],
});

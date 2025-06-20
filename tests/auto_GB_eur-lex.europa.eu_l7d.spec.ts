import generateCMPTests from '../playwright/runner';
generateCMPTests('auto_GB_eur-lex.europa.eu_l7d', ['https://eur-lex.europa.eu/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});

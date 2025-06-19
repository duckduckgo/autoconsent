import generateCMPTests from '../playwright/runner';
generateCMPTests('auto_GB_eur-lex.europa.eu_9tw', ['https://eur-lex.europa.eu/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});

import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_eur-lex.europa.eu_399', ['https://eur-lex.europa.eu/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});

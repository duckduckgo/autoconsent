import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_eur-lex.europa.eu_bsu', ['https://eur-lex.europa.eu/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});

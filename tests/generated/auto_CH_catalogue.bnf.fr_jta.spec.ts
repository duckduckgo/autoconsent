import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_catalogue.bnf.fr_jta', ['https://catalogue.bnf.fr/index.do'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});

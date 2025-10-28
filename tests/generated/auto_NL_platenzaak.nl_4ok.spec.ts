import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_platenzaak.nl_4ok', ['https://www.platenzaak.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});

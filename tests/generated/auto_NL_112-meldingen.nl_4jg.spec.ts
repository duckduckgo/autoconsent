import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_112-meldingen.nl_4jg', ['https://112-meldingen.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});

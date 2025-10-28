import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_elektrototaalmarkt.nl_bog', ['https://www.elektrototaalmarkt.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});

import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_energieswitch.nl_4ll', ['https://energieswitch.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});

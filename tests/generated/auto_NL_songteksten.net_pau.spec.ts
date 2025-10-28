import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_songteksten.net_pau', ['https://songteksten.net/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});

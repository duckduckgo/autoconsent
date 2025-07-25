import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_dsautomobiles.nl_bhp', ['https://www.dsautomobiles.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});

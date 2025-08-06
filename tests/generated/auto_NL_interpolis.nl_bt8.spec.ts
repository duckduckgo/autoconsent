import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_interpolis.nl_bt8', ['https://www.interpolis.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});

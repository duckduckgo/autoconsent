import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_fietsonderdelenoutlet.nl_22m', ['https://www.fietsonderdelenoutlet.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});

import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_printabout.nl_ry6', ['https://www.printabout.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});

import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_onderwijsvanmorgen.nl_xhp', ['https://www.onderwijsvanmorgen.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});

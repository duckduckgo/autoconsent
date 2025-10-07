import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_onderwijsvanmorgen.nl_opg', ['https://www.onderwijsvanmorgen.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});

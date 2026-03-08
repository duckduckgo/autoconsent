import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_chromebookenzo.nl_h60', ['https://chromebookenzo.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});

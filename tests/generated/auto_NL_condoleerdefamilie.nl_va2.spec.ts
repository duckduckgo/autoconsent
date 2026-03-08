import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_condoleerdefamilie.nl_va2', ['https://condoleerdefamilie.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});

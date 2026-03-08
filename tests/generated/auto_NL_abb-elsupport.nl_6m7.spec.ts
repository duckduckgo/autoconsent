import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_abb-elsupport.nl_6m7', ['https://abb-elsupport.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});

import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_vlissingen.nl_p8r', ['https://www.vlissingen.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});

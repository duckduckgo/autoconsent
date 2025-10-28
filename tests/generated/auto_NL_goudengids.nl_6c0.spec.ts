import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_goudengids.nl_6c0', ['https://www.goudengids.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});

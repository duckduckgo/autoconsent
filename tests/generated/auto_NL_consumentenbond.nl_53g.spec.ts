import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_consumentenbond.nl_53g', ['https://www.consumentenbond.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});

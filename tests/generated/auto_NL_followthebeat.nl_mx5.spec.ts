import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_followthebeat.nl_mx5', ['https://followthebeat.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});

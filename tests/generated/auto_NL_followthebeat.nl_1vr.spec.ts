import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_followthebeat.nl_1vr', ['https://followthebeat.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});

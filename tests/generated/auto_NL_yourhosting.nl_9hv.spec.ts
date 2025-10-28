import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_yourhosting.nl_9hv', ['https://www.yourhosting.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});

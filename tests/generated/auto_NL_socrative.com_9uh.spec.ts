import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_socrative.com_9uh', ['https://www.socrative.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});

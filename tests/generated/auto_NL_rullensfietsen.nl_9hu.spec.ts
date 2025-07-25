import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_rullensfietsen.nl_9hu', ['https://www.rullensfietsen.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});

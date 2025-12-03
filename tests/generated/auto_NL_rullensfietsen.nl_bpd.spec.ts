import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_rullensfietsen.nl_bpd', ['https://www.rullensfietsen.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});

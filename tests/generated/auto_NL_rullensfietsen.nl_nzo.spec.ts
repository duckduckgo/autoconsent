import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_rullensfietsen.nl_nzo', ['https://www.rullensfietsen.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});

import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_energiedirect.nl_p85', ['https://www.energiedirect.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});

import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_energiedirect.nl_98j', ['https://www.energiedirect.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});

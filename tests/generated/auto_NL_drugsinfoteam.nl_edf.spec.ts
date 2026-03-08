import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_drugsinfoteam.nl_edf', ['https://drugsinfoteam.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});

import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_ggzingeest.nl_b3j', ['https://www.ggzingeest.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});

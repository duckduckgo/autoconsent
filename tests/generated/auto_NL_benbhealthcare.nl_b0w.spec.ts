import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_benbhealthcare.nl_b0w', ['https://benbhealthcare.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});

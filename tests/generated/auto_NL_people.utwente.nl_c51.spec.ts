import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_people.utwente.nl_c51', ['https://people.utwente.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});

import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_people.utwente.nl_6rx', ['https://people.utwente.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});

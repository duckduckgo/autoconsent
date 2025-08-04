import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_people.utwente.nl_4l2', ['https://people.utwente.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});

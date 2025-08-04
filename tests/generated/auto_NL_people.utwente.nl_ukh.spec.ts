import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_people.utwente.nl_ukh', ['https://people.utwente.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});

import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_schaapcitroen.nl_6v0', ['https://www.schaapcitroen.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});

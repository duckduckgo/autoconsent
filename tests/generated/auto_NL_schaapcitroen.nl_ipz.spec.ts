import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_schaapcitroen.nl_ipz', ['https://www.schaapcitroen.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});

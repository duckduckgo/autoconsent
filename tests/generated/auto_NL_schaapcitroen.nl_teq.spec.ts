import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_schaapcitroen.nl_teq', ['https://www.schaapcitroen.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});

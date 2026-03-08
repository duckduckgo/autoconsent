import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_fotogrijpink.nl_9k5', ['https://fotogrijpink.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});

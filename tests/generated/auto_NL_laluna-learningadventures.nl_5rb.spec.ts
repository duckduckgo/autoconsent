import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_laluna-learningadventures.nl_5rb', ['https://www.laluna-learningadventures.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});

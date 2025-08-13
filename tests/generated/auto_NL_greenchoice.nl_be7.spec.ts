import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_greenchoice.nl_be7', ['https://www.greenchoice.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});

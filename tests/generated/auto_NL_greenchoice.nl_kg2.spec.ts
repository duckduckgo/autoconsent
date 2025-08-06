import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_greenchoice.nl_kg2', ['https://www.greenchoice.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});

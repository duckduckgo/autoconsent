import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_newsinenglish.no_b29', ['https://www.newsinenglish.no/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});

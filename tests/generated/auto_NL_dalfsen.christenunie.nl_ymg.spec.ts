import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_dalfsen.christenunie.nl_ymg', ['https://dalfsen.christenunie.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});

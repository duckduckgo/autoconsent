import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_klimaatmars.nl_2rb', ['https://klimaatmars.nl/en/home/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});

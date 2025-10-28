import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_aziatische-ingredienten.nl_ndj', ['https://www.aziatische-ingredienten.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});

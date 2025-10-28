import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_stadsschouwburghaarlem.nl_k6c', ['https://stadsschouwburghaarlem.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});

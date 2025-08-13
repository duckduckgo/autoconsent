import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_youngcapital.nl_n09', ['https://www.youngcapital.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});

import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_youngcapital.nl_pdc', ['https://www.youngcapital.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});

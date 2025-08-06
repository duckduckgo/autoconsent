import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_discountoffice.nl_2em', ['https://discountoffice.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});

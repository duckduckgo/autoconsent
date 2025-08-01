import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_suitableshop.nl_ye7', ['https://www.suitableshop.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});

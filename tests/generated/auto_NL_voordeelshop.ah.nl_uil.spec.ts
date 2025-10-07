import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_voordeelshop.ah.nl_uil', ['https://voordeelshop.ah.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});

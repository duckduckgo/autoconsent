import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_3mnederland.nl_cy7', ['https://www.3mnederland.nl/3M/nl_NL/company-base-bnl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});

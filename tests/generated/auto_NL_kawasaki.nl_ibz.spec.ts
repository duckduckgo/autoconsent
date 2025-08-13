import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_kawasaki.nl_ibz', ['https://www.kawasaki.nl/nl/products'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});

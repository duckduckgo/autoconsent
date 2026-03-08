import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_bimmerproducts.nl_bsk', ['https://bimmerproducts.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});

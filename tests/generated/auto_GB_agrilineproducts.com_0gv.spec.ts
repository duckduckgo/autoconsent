import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_agrilineproducts.com_0gv', ['https://agrilineproducts.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});

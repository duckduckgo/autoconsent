import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_agrilineproducts.com_xf6', ['https://agrilineproducts.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});

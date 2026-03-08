import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_agrilineproducts.com_utl', ['https://agrilineproducts.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});

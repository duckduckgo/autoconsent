import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_hyperice.com_sld', ['https://hyperice.com/products/normatec-elite/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});

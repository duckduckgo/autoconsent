import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_boutique-parquet.com_kab', ['https://boutique-parquet.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});

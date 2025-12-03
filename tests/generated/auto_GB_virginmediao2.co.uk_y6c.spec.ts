import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_virginmediao2.co.uk_y6c', ['https://www.virginmediao2.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});

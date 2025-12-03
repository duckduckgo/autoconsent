import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_caremetix.mahle.com_vgt', ['https://www.mahle-aftermarket.com/eu/en/products/filters/caremetix/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});

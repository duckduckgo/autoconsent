import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_lifespan.io_nhm', ['https://www.lifespan.io/topic/spermidine-benefits-side-effects/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});

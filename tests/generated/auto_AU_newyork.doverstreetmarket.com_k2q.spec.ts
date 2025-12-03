import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_newyork.doverstreetmarket.com_k2q', ['https://newyork.doverstreetmarket.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});

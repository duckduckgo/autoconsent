import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_newyork.doverstreetmarket.com_j5q', ['https://newyork.doverstreetmarket.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});

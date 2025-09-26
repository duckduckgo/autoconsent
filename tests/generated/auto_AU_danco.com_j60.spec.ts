import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_danco.com_j60', ['https://www.danco.com/product/square-hair-catcher-for-shower-drain-in-chrome/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});

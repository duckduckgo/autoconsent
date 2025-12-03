import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_de.artprice.com_kfk', ['https://de.artprice.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});

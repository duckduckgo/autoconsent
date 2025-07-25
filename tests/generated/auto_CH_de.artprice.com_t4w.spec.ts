import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_de.artprice.com_t4w', ['https://de.artprice.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});

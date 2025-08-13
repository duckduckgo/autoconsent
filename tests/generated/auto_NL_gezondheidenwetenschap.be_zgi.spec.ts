import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_gezondheidenwetenschap.be_zgi', ['https://www.gezondheidenwetenschap.be/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});

import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_gezondheidenwetenschap.be_zne', ['https://www.gezondheidenwetenschap.be/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});

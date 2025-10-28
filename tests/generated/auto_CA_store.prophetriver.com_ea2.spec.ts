import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_store.prophetriver.com_ea2', ['https://store.prophetriver.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});

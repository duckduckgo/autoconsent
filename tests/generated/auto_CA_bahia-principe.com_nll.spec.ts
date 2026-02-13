import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_bahia-principe.com_nll', ['https://www.bahia-principe.com/en/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});

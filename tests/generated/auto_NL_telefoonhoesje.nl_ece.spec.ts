import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_telefoonhoesje.nl_ece', ['https://www.telefoonhoesje.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});

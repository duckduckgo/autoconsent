import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_telefoonhoesje.nl_p1j', ['https://www.telefoonhoesje.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});

import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_laurentiusziekenhuisroermond.nl_5zc', ['https://www.laurentiusziekenhuisroermond.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});

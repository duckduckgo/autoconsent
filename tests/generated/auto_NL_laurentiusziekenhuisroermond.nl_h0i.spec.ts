import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_laurentiusziekenhuisroermond.nl_h0i', ['https://www.laurentiusziekenhuisroermond.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});

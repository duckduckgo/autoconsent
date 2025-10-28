import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_camperpassie.nl_vzk', ['https://www.camperpassie.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});

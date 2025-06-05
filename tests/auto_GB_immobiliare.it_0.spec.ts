import generateCMPTests from '../playwright/runner';
generateCMPTests('auto_GB_immobiliare.it_0', ['https://www.immobiliare.it/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});

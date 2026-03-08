import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_arthritiskneepain.com_uj4', ['https://arthritiskneepain.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['US'],
});

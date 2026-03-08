import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_daa-mitte-ost.de_ds3', ['https://daa-mitte-ost.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});

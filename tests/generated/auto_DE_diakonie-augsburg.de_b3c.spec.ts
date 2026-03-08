import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_diakonie-augsburg.de_b3c', ['https://diakonie-augsburg.de/de'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});

import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_polizei.brandenburg.de_o7c', ['https://polizei.brandenburg.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});

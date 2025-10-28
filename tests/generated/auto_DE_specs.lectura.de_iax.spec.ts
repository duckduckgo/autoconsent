import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_specs.lectura.de_iax', ['https://specs.lectura.de/de'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});

import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_rentenbescheid24.de_ac8', ['https://rentenbescheid24.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});

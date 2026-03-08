import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_augenklinik.mri.tum.de_7wn', ['https://augenklinik.mri.tum.de/de'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});

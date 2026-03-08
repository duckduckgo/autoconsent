import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_beziehungsdynamik.de_nn6', ['https://beziehungsdynamik.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});

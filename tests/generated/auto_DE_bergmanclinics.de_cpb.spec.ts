import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_bergmanclinics.de_cpb', ['https://bergmanclinics.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});

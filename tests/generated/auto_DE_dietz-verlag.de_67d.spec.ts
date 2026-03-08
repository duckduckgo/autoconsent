import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_dietz-verlag.de_67d', ['https://dietz-verlag.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});

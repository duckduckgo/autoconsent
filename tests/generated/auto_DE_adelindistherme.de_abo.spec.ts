import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_adelindistherme.de_abo', ['https://adelindistherme.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});

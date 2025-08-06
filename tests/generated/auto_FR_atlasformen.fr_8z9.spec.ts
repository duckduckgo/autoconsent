import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_atlasformen.fr_8z9', ['https://www.atlasformen.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});

import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_atlasformen.fr_62s', ['https://www.atlasformen.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});

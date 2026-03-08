import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_asia4friends.de_4xu', ['https://asia4friends.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});

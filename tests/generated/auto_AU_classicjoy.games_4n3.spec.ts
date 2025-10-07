import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_classicjoy.games_4n3', ['https://classicjoy.games/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});

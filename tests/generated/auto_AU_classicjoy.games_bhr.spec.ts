import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_classicjoy.games_bhr', ['https://classicjoy.games/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});

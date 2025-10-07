import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_classicjoy.games_8ii', ['https://classicjoy.games/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});

import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_forum.deaf-forever.de_gjg', ['https://forum.deaf-forever.de/index.php'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});

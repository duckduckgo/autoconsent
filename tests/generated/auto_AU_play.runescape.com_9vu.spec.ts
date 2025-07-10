import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_play.runescape.com_9vu', ['https://play.runescape.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['AU'],
});

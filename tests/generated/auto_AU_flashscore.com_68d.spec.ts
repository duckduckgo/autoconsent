import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_flashscore.com_68d', ['https://www.flashscore.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['AU'],
});

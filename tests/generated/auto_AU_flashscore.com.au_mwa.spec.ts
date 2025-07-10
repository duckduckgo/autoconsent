import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_flashscore.com.au_mwa', ['https://www.flashscore.com.au/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['AU'],
});

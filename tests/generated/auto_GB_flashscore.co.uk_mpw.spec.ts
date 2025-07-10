import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_flashscore.co.uk_mpw', ['https://www.flashscore.co.uk/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});

import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_thinkpad-forum.de_zo1', ['https://thinkpad-forum.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});

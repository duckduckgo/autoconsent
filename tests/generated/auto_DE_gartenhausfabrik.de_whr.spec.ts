import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_gartenhausfabrik.de_whr', ['https://www.gartenhausfabrik.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});

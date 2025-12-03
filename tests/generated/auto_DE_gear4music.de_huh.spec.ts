import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_gear4music.de_huh', ['https://www.gear4music.de/de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});

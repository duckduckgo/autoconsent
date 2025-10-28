import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_lanxess-arena.de_ess', ['https://www.lanxess-arena.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});

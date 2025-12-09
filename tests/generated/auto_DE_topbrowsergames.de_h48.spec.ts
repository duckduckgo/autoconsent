import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_topbrowsergames.de_h48', ['https://www.topbrowsergames.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});

import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_de.boardgamearena.com_zng', ['https://de.boardgamearena.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});

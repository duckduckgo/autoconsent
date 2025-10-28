import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_fr.boardgamearena.com_oru', ['https://fr.boardgamearena.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});

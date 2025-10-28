import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_board-game.co.uk_mi6', ['https://www.board-game.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});

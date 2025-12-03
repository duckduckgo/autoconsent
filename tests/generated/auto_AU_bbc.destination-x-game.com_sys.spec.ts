import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_bbc.destination-x-game.com_sys', ['https://bbc.destination-x-game.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});

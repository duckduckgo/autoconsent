import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_gameduell.de_aan', ['https://www.gameduell.de/gd/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});

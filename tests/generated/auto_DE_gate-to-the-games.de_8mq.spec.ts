import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_gate-to-the-games.de_8mq', ['https://www.gate-to-the-games.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});

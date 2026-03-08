import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_ackermann-leder.de_4zk', ['https://ackermann-leder.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});

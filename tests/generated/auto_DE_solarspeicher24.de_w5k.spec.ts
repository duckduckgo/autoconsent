import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_solarspeicher24.de_w5k', ['https://solarspeicher24.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});

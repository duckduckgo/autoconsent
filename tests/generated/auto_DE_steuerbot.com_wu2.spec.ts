import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_steuerbot.com_wu2', ['https://www.steuerbot.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});

import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_steuerbot.com_alm', ['https://www.steuerbot.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});

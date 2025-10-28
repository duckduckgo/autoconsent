import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_commandinline.com_grm', ['https://www.commandinline.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});

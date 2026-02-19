import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_trans.fleshbot.com_cc2', ['https://trans.fleshbot.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});

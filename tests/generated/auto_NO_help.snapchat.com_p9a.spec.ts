import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_help.snapchat.com_p9a', ['https://help.snapchat.com/hc/en-us'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});

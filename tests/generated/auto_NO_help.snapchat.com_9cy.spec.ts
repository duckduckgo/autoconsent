import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_help.snapchat.com_9cy', ['https://help.snapchat.com/hc/en-us'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});

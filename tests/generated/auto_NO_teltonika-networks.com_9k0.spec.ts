import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_teltonika-networks.com_9k0', ['https://teltonika-networks.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});

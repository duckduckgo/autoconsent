import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_teltonika-networks.com_4cn', ['https://teltonika-networks.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});

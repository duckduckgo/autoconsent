import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_teltonika-networks.com_wtz', ['https://www.teltonika-networks.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});

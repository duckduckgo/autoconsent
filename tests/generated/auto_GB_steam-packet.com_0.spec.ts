import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_steam-packet.com_0', ['https://www.steam-packet.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});

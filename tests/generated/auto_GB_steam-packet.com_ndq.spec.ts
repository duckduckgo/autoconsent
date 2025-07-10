import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_steam-packet.com_ndq', ['https://www.steam-packet.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});

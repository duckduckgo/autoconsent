import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_worldofwallpaper.com_ttl', ['https://www.worldofwallpaper.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});

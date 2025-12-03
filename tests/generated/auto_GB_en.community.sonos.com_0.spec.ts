import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_en.community.sonos.com_0', ['https://en.community.sonos.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});

import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_en.community.sonos.com_evc', ['https://en.community.sonos.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});

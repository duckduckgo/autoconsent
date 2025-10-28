import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_nl.community.sonos.com_n93', ['https://nl.community.sonos.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});

import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_support.plex.tv_gat', ['https://support.plex.tv/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});

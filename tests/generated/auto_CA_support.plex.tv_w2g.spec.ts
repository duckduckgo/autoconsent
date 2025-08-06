import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_support.plex.tv_w2g', ['https://support.plex.tv/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});

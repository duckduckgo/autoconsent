import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_mediatheque.ch_v0l', ['https://www.mediatheque.ch/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});

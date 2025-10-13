import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_mediatheque.ch_360', ['https://www.mediatheque.ch/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});

import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_mediatheque.ch_pda', ['https://www.mediatheque.ch/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});

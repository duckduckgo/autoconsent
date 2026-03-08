import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_atlasderschweiz.ch_wyi', ['https://atlasderschweiz.ch/en/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});

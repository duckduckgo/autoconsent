import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_obersaxen-mundaun.ch_zwj', ['https://obersaxen-mundaun.ch/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});

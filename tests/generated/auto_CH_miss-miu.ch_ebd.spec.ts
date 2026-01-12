import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_miss-miu.ch_ebd', ['https://www.miss-miu.ch/en/home'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});

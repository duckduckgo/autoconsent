import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_birsfelden.ch_588', ['https://www.birsfelden.ch/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});

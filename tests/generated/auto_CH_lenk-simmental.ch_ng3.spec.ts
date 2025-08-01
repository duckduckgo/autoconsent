import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_lenk-simmental.ch_ng3', ['https://lenk-simmental.ch/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});

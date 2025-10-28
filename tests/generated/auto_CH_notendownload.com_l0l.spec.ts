import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_notendownload.com_l0l', ['https://www.notendownload.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});

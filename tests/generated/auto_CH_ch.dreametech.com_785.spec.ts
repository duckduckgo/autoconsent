import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_ch.dreametech.com_785', ['https://ch.dreametech.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});

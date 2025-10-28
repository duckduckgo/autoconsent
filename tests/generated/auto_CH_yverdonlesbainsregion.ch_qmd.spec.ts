import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_yverdonlesbainsregion.ch_qmd', ['https://yverdonlesbainsregion.ch/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});

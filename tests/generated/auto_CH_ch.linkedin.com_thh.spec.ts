import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_ch.linkedin.com_thh', ['https://ch.linkedin.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});

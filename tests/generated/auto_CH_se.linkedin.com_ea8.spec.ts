import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_se.linkedin.com_ea8', ['https://se.linkedin.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});

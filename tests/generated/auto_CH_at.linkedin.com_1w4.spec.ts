import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_at.linkedin.com_1w4', ['https://at.linkedin.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});

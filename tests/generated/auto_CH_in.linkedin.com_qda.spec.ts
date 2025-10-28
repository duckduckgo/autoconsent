import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_in.linkedin.com_qda', ['https://in.linkedin.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});

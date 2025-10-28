import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_ca.linkedin.com_gb5', ['https://ca.linkedin.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});

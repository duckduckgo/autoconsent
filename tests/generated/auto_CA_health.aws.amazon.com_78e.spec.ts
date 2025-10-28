import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_health.aws.amazon.com_78e', ['https://health.aws.amazon.com/health/status'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});

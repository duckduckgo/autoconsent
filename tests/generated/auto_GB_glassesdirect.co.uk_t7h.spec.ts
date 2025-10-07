import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_glassesdirect.co.uk_t7h', ['https://www.glassesdirect.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});

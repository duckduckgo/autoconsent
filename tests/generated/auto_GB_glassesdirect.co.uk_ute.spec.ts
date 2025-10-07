import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_glassesdirect.co.uk_ute', ['https://www.glassesdirect.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});

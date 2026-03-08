import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_freedom-vision.co.uk_w5m', ['https://freedom-vision.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});

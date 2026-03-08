import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_firefly-guitar.com_qpl', ['https://firefly-guitar.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['US'],
});

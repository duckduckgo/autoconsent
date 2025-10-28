import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_miamiherald.com_9xw', ['https://www.miamiherald.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['US'],
});

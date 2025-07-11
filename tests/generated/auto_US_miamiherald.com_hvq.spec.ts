import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_miamiherald.com_hvq', ['https://www.miamiherald.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['US'],
});

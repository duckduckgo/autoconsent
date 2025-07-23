import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_miamiherald.com_u3y', ['https://www.miamiherald.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['US'],
});

import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_patagonia.com_pzw', ['https://www.patagonia.com/home/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['US'],
});

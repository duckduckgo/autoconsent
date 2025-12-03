import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_trendlinehq.com_4e6', ['https://www.trendlinehq.com/p/europe-us-stocks-in-2025'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});

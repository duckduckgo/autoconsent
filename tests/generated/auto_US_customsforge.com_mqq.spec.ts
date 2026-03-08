import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_customsforge.com_mqq', ['https://customsforge.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['US'],
});

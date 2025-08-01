import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_kansascity.com_0', ['https://www.kansascity.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['US'],
});

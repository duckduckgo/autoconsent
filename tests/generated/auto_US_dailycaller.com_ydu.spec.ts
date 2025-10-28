import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_dailycaller.com_ydu', ['https://dailycaller.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['US'],
});

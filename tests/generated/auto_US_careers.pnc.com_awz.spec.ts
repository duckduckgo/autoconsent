import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_careers.pnc.com_awz', ['https://careers.pnc.com/global/en'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['US'],
});

import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_guitarcenter.com_62c', ['https://www.guitarcenter.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['US'],
});

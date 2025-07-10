import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_guitarcenter.com_ee6', ['https://www.guitarcenter.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['US'],
});

import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_guitarcenter.com_zc1', ['https://www.guitarcenter.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['AU'],
});

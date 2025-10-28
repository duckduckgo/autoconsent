import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_guitarcenter.com_k52', ['https://www.guitarcenter.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});

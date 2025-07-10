import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_guitarcenter.com_24i', ['https://www.guitarcenter.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['AU'],
});

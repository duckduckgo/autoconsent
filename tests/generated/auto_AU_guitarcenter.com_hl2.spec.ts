import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_guitarcenter.com_hl2', ['https://www.guitarcenter.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});

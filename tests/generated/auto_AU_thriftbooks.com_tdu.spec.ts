import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_thriftbooks.com_tdu', ['https://www.thriftbooks.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});

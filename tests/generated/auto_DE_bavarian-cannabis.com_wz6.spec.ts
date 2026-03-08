import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_bavarian-cannabis.com_wz6', ['https://bavarian-cannabis.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});

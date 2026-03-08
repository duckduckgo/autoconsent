import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_de.clearblue.com_e4h', ['https://de.clearblue.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});

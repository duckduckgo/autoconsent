import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_laboutiqueduvolet.com_7i2', ['https://www.laboutiqueduvolet.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});

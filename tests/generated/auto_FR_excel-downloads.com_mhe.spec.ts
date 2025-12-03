import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_excel-downloads.com_mhe', ['https://excel-downloads.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});

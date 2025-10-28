import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_charme-traditions.com_7kg', ['https://www.charme-traditions.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});

import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_connectotransfers.com_fw5', ['https://connectotransfers.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});

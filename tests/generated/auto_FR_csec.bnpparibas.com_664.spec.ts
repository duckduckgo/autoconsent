import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_csec.bnpparibas.com_664', ['https://csec.bnpparibas.com/com/login?back_url=%2Fcom%2Fhomepage'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});

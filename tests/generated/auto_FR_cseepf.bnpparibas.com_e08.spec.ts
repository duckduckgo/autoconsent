import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_cseepf.bnpparibas.com_e08', ['https://cseepf.bnpparibas.com/com/login?back_url=%2Fcom%2Fhomepage'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});

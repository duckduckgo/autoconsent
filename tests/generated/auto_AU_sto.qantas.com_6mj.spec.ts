import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_sto.qantas.com_6mj', ['https://sto.qantas.com/auth/formLogin?companyId=QF&appId=iflyStaff'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});

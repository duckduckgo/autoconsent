import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_sto.qantas.com_1n6', ['https://sto.qantas.com/auth/formLogin?companyId=QF&appId=iflyStaff'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});

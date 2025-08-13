import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_pcsupport.lenovo.com_dxi', ['https://pcsupport.lenovo.com/ca/en/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});

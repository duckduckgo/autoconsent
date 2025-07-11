import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_pcsupport.lenovo.com_8g4', ['https://pcsupport.lenovo.com/ca/en/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['CA'],
});

import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_pneusarabais.com_xde', ['https://pneusarabais.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});

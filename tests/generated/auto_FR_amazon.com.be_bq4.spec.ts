import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_amazon.com.be_bq4', ['https://www.amazon.com.be/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});

import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_bouletboots.com_sk2', ['https://bouletboots.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});

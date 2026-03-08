import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_careers.cognizant.com_7f9', ['https://careers.cognizant.com/us-en/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});

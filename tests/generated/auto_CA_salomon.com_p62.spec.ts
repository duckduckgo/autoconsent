import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_salomon.com_p62', ['https://www.salomon.com/en-ca'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});

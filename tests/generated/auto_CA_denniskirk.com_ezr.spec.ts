import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_denniskirk.com_ezr', ['https://www.denniskirk.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});

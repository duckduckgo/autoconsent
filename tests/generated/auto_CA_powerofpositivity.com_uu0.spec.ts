import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_powerofpositivity.com_uu0', ['https://www.powerofpositivity.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['CA'],
});

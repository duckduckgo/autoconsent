import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_playvalorant.com_tdi', ['https://playvalorant.com/en-us/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['CA'],
});

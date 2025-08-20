import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_coasthotels.com_f8m', ['https://www.coasthotels.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});

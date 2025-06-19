import generateCMPTests from '../playwright/runner';
generateCMPTests('auto_CA_coasthotels.com_xqi', ['https://www.coasthotels.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['CA'],
});

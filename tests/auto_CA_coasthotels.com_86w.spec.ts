import generateCMPTests from '../playwright/runner';
generateCMPTests('auto_CA_coasthotels.com_86w', ['https://www.coasthotels.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['CA'],
});

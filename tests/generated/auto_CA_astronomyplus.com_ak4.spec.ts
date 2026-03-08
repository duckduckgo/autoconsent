import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_astronomyplus.com_ak4', ['https://astronomyplus.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});

import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_blsindia-canada.com_qqp', ['https://www.blsindia-canada.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});

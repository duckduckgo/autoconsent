import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_embraceinnerchaos.com_51w', ['https://embraceinnerchaos.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});

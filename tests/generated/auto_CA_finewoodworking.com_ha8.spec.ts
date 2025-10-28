import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_finewoodworking.com_ha8', ['https://www.finewoodworking.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});

import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_draftvietnam.com_ubw', ['https://draftvietnam.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});

import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_troykaonline.com_cyq', ['https://www.troykaonline.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});

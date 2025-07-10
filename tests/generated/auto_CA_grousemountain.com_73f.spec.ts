import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_grousemountain.com_73f', ['https://www.grousemountain.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['CA'],
});

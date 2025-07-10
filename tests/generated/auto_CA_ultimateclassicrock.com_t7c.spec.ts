import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_ultimateclassicrock.com_t7c', ['https://ultimateclassicrock.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['CA'],
});

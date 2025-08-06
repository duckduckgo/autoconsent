import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_melchsee-frutt.ch_jpj', ['https://www.melchsee-frutt.ch/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});

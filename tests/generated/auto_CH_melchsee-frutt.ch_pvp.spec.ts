import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_melchsee-frutt.ch_pvp', ['https://www.melchsee-frutt.ch/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});

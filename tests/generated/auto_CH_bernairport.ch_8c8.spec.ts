import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_bernairport.ch_8c8', ['https://www.bernairport.ch/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});

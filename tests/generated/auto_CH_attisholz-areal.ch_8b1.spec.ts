import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_attisholz-areal.ch_8b1', ['https://attisholz-areal.ch/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});

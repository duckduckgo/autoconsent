import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_body-beautyline.ch_khy', ['https://body-beautyline.ch/de'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});

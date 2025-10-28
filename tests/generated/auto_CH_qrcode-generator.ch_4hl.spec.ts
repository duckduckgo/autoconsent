import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_qrcode-generator.ch_4hl', ['https://www.qrcode-generator.ch/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});

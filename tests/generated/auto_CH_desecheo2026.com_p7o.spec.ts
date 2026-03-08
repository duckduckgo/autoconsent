import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_desecheo2026.com_p7o', ['https://desecheo2026.com/kp5/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});

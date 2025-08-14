import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_resortragaz.ch_u2z', ['https://www.resortragaz.ch/en/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});

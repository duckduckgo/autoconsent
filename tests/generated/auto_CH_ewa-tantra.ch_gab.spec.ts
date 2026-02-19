import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_ewa-tantra.ch_gab', ['https://www.ewa-tantra.ch/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});

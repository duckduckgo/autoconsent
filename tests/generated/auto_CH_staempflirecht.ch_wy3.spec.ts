import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_staempflirecht.ch_wy3', ['https://staempflirecht.ch/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});

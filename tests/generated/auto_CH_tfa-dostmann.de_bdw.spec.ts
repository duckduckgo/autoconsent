import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_tfa-dostmann.de_bdw', ['https://www.tfa-dostmann.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});

import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_led-universum.de_jw8', ['http://www.led-universum.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});

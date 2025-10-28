import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_forum.arduino.cc_0qw', ['https://forum.arduino.cc/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});

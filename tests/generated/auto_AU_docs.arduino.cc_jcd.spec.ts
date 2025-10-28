import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_docs.arduino.cc_jcd', ['https://docs.arduino.cc/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});

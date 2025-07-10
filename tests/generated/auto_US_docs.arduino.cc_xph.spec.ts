import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_docs.arduino.cc_xph', ['https://docs.arduino.cc/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['US'],
});

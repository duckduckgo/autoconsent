import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_projecthub.arduino.cc_5me', ['https://projecthub.arduino.cc/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});

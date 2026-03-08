import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_devijfsprong.nl_plc', ['https://devijfsprong.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});

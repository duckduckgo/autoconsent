import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_brokerchooser.com_01b', ['https://brokerchooser.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});

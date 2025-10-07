import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_bommelwereld.nl_rgs', ['https://bommelwereld.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});

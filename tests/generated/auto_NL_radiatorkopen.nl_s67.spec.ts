import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_radiatorkopen.nl_s67', ['https://radiatorkopen.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});

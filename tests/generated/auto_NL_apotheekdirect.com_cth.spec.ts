import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_apotheekdirect.com_cth', ['https://apotheekdirect.com/en'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});

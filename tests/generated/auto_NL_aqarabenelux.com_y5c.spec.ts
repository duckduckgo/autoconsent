import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_aqarabenelux.com_y5c', ['https://aqarabenelux.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});

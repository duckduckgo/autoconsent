import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_heronfireworks.com_bha', ['https://www.heronfireworks.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});

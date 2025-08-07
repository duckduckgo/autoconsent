import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_keepersecurity.com_mzj', ['https://www.keepersecurity.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});

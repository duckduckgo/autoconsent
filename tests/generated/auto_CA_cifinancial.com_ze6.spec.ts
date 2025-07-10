import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_cifinancial.com_ze6', ['https://www.cifinancial.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['CA'],
});

import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_dndbeyond.com_8ol', ['https://www.dndbeyond.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['US'],
});

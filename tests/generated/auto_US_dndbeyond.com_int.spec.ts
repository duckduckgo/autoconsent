import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_dndbeyond.com_int', ['https://www.dndbeyond.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['US'],
});

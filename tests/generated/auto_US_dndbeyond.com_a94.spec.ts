import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_dndbeyond.com_a94', ['https://www.dndbeyond.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['US'],
});

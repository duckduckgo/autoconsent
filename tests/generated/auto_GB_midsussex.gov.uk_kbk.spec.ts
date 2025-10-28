import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_midsussex.gov.uk_kbk', ['https://www.midsussex.gov.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});

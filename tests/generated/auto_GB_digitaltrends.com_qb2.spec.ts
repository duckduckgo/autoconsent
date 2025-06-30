import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_digitaltrends.com_qb2', ['https://www.digitaltrends.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});

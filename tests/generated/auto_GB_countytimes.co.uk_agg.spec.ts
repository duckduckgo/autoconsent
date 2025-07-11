import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_countytimes.co.uk_agg', ['https://www.countytimes.co.uk/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});

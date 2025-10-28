import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_scottishpower.co.uk_pp5', ['https://www.scottishpower.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});

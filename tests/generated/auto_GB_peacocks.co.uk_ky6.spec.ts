import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_peacocks.co.uk_ky6', ['https://www.peacocks.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});

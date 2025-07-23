import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_countytimes.co.uk_vje', ['https://www.countytimes.co.uk/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});

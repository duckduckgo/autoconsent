import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_national-lottery.co.uk_qqw', ['https://www.national-lottery.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});

import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_fanatics.co.uk_0', ['https://www.fanatics.co.uk/en/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});

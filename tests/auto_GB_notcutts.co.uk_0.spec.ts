import generateCMPTests from '../playwright/runner';
generateCMPTests('auto_GB_notcutts.co.uk_0', ['https://www.notcutts.co.uk/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});

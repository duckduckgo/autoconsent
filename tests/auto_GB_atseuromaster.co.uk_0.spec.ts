import generateCMPTests from '../playwright/runner';
generateCMPTests('auto_GB_atseuromaster.co.uk_0', ['https://www.atseuromaster.co.uk/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});

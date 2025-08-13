import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_milkandmore.co.uk_0', ['https://www.milkandmore.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});

import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_ninjakitchen.co.uk_0', ['https://ninjakitchen.co.uk/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});

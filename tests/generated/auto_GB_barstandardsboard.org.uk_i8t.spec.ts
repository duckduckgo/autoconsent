import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_barstandardsboard.org.uk_i8t', ['https://www.barstandardsboard.org.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});

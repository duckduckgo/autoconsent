import generateCMPTests from '../playwright/runner';
generateCMPTests('auto_GB_underarmour.co.uk_6t9', ['https://www.underarmour.co.uk/en-gb/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});

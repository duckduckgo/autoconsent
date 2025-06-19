import generateCMPTests from '../playwright/runner';
generateCMPTests('auto_GB_underarmour.co.uk_xgo', ['https://www.underarmour.co.uk/en-gb/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});

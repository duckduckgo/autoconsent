import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_underarmour.co.uk_eew', ['https://www.underarmour.co.uk/en-gb/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});

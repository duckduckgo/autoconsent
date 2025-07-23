import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_oxfordmail.co.uk_2xg', ['https://www.oxfordmail.co.uk/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});

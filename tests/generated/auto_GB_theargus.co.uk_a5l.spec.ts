import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_theargus.co.uk_a5l', ['https://www.theargus.co.uk/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});

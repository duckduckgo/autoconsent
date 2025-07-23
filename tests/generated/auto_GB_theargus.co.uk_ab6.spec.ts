import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_theargus.co.uk_ab6', ['https://www.theargus.co.uk/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});

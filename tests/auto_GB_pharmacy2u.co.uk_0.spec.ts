import generateCMPTests from '../playwright/runner';
generateCMPTests('auto_GB_pharmacy2u.co.uk_0', ['https://www.pharmacy2u.co.uk/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});

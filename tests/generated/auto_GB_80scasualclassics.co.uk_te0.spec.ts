import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_80scasualclassics.co.uk_te0', ['https://www.80scasualclassics.co.uk/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});

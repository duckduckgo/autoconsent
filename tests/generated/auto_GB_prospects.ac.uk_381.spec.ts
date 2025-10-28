import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_prospects.ac.uk_381', ['https://www.prospects.ac.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});

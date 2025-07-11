import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_worcesternews.co.uk_bb4', ['https://www.worcesternews.co.uk/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});

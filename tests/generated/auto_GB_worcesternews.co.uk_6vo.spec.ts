import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_worcesternews.co.uk_6vo', ['https://www.worcesternews.co.uk/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});

import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_bradfords.co.uk_48e', ['https://www.bradfords.co.uk/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});

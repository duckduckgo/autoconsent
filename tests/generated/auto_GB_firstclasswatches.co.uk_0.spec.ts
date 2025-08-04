import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_firstclasswatches.co.uk_0', ['https://www.firstclasswatches.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});

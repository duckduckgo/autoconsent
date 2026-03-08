import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_barnfindbikes.co.uk_edw', ['https://barnfindbikes.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});

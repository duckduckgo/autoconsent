import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_poundland.co.uk_9pz', ['https://www.poundland.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});

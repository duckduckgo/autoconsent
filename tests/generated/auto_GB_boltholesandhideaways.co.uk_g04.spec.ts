import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_boltholesandhideaways.co.uk_g04', ['https://boltholesandhideaways.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});

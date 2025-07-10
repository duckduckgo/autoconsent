import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_drainagesuperstore.co.uk_s5z', ['https://www.drainagesuperstore.co.uk/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});

import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_drainagesuperstore.co.uk_0', ['https://www.drainagesuperstore.co.uk/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});

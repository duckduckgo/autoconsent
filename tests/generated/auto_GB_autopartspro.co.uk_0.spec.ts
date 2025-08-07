import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_autopartspro.co.uk_0', ['https://www.autopartspro.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});

import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_accessable.co.uk_0', ['https://www.accessable.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});

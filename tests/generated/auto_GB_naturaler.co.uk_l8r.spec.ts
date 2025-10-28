import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_naturaler.co.uk_l8r', ['https://naturaler.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});

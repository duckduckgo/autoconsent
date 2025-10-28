import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_samsungspares.co.uk_k2r', ['https://www.samsungspares.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});

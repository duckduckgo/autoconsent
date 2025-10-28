import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_machinemart.co.uk_8ad', ['https://www.machinemart.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});

import generateCMPTests from '../playwright/runner';
generateCMPTests('auto_GB_citizenwatch.co.uk_0', ['https://www.citizenwatch.co.uk/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});

import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_espares.co.uk_9cm', ['https://www.espares.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});

import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_alfi-turbo.com_dq1', ['https://alfi-turbo.com/gb/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});

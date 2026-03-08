import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_alfi-turbo.com_7mv', ['https://alfi-turbo.com/gb/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});

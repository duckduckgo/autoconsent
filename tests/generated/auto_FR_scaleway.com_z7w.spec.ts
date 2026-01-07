import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_scaleway.com_z7w', ['https://www.scaleway.com/en/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});

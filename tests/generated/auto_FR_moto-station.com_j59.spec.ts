import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_moto-station.com_j59', ['https://moto-station.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});

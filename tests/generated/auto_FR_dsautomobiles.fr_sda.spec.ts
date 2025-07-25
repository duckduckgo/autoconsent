import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_dsautomobiles.fr_sda', ['https://www.dsautomobiles.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});

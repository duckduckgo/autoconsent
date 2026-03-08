import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_ariregister.rik.ee_kir', ['https://ariregister.rik.ee/eng'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});

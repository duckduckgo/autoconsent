import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_mangooutlet.com_hwl', ['https://www.mangooutlet.com/gb/en'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});

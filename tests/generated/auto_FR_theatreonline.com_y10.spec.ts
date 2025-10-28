import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_theatreonline.com_y10', ['https://www.theatreonline.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});

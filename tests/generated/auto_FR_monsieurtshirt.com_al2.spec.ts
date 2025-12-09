import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_monsieurtshirt.com_al2', ['https://www.monsieurtshirt.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});

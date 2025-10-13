import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_naval-group.com_yzx', ['https://www.naval-group.com/en'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});

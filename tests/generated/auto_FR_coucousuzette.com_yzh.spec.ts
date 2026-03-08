import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_coucousuzette.com_yzh', ['https://coucousuzette.com/en'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});

import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_norumbegainn.com_yho', ['https://norumbegainn.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});

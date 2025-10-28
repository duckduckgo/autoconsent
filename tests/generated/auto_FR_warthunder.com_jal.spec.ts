import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_warthunder.com_jal', ['https://warthunder.com/fr'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});

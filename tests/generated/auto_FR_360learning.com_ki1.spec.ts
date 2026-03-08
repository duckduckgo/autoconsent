import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_360learning.com_ki1', ['https://360learning.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});

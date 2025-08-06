import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_dlsite.com_mi9', ['https://www.dlsite.com/index.html'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});

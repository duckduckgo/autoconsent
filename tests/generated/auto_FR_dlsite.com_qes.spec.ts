import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_dlsite.com_qes', ['https://www.dlsite.com/index.html'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});

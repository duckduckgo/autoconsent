import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_aide.lanef.com_jgi', ['https://aide.lanef.com/hc/fr'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});

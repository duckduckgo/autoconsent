import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_boomboomvillette.com_ujx', ['https://boomboomvillette.com/fr'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});

import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_cannes.com_74n', ['https://www.cannes.com/fr/index.html'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});

import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_developpez.com_v7c', ['https://www.developpez.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});

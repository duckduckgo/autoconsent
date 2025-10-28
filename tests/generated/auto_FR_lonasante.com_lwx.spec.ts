import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_lonasante.com_lwx', ['https://www.lonasante.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});

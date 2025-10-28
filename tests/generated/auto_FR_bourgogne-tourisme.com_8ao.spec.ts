import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_bourgogne-tourisme.com_8ao', ['https://www.bourgogne-tourisme.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});

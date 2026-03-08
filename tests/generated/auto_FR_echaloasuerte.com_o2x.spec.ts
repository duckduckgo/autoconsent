import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_echaloasuerte.com_o2x', ['https://echaloasuerte.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});

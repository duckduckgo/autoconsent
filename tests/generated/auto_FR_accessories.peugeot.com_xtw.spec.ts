import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_accessories.peugeot.com_xtw', ['https://accessories.peugeot.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});

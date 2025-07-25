import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_festival-avignon.com_klw', ['https://festival-avignon.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});

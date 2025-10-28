import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_compta-online.com_z47', ['https://www.compta-online.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});

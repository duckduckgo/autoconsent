import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_toucharger.com_mya', ['https://www.toucharger.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});

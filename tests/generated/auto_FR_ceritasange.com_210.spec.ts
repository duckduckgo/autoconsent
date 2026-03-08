import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_ceritasange.com_210', ['https://ceritasange.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});

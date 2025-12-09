import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_chamrousse.com_f2c', ['https://www.chamrousse.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});

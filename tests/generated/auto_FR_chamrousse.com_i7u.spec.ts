import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_chamrousse.com_i7u', ['https://www.chamrousse.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});

import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_chamrousse.com_bau', ['https://www.chamrousse.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});

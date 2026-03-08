import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_concours-ecriture.com_jdq', ['https://concours-ecriture.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
